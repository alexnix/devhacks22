import {MuseumPopup} from "./MuseumPopup.js";

export class Catalog {
    constructor(dataRetriever) {
        this.screenId = "catalog-screen";
        this.dataRetriever = dataRetriever;
        this.museumPopup = new MuseumPopup(this.dataRetriever);
    }

    show() {
        $(".screen").hide();
        this.getDomEl().show();
        const _self = this;
        this.getDomEl().html("");
        const museumList = this.dataRetriever.getMuseums();
        for (const i in museumList) {
            const museumDOM = $(this.getMuseum(museumList[i]));
            museumDOM.click(function () {
                _self.showMuseumPopup();
            });
            this.getDomEl().append(museumDOM);
        }
    }

    showMuseumPopup() {
        this.museumPopup.show();
    }

    getMuseum(data) {
        return $(
            "<div>" +
            '<img src="' +
            data.cover +
            '">' +
            "<span>" +
            data.name +
            "</span>" +
            "</div>"
        );
    }

    getDomEl() {
        return $("#" + this.screenId);
    }
}
