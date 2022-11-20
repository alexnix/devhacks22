export class ItemPopup {
    constructor(museumPopup) {
        this.itemDOM = null;
        this.museumPopup = museumPopup;
        this.interactionStart = null;
        this.recordsRoute = "http://localhost:8090/api/collections/exhibits/records";
        this.data = null;
    }

    show(data) {
        this.data = data;
        this.close();
        this.interactionStart = new Date();
        const _self = this;
        this.itemDOM = $("<div></div>").addClass('popup');
        this.itemDOM.append(
            "<div class='image'><img src='" + data.image + "' /></div>" +
            "<h1>" + data.name + "</h1>" +
            "<button type='button' class='like-btn'>Like</button>"+
            "<p>" + data.description + "</p>"

        );
        const closeBtn = $("<a class='close'>x</a>");
        closeBtn.click(function () {
            _self.close()
        });
        this.itemDOM.append(closeBtn);

        $('body').append(this.itemDOM);
    }

    close() {
        console.log("close", this.itemDOM);
        if (this.itemDOM !== null) {
            this.data = null;
            this.itemDOM.remove();
            this.itemDOM = null;
            //TODO: send request with analytics to the BE
            const timeSpent = new Date() - this.interactionStart;
            $.ajax({
                headers: {
                    "Authorization": localStorage.getItem('token')
                },
                url: this.recordsRoute,
                data: {
                    "userID": localStorage.getItem('userID'),
                    "exhibitID": this.data.id,
                    "time": timeSpent,
                    "like": false
                }
            });
            this.museumPopup.show();
        }
    }
}