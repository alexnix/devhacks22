// import {MuseumPopup} from "./MuseumPopup.js";

export class ItemPopup {
    constructor(museumPopup) {
        this.itemDOM = null;
        this.museumPopup = museumPopup;
        this.interactionStart = null;
    }

    show(data) {
        this.close();
        this.interactionStart = new Date();
        const _self = this;
        this.itemDOM = $("<div></div>").addClass('popup');
        this.itemDOM.append(
            "<div class='image'><img src='" + data.image + "' /></div>" +
            "<h1>" + data.name + "</h1>" +
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
        if (this.itemDOM !== null) {
            this.itemDOM.remove();
        }
        this.museumPopup.show();
        //TODO: send request with analytics to the BE
    }
}