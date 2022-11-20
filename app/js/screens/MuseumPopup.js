import {DataRetriever} from "../dataRetriever.js";
import {ItemPopup} from "./ItemPopup.js";

export class MuseumPopup {
    constructor() {
        this.museumId = null;
        this.dataRetriever = new DataRetriever();
        this.itemPopup = new ItemPopup(this);
    }

    show(museumId) {
        if (typeof museumId !== "undefined") {
            this.museumId = museumId;
        }
        const _self = this;
        $("#qrCodeReaderTrigger").qrCodeReader({
            target: null,
            audioFeedback: false,
            multiple: false,
            skipDuplicates: false,
            callback: function (code) {
                console.log(code);
                _self.showItemPopup(code);
            },
        });
        $("#qrCodeReaderTrigger").click();
    }

    showItemPopup(code) {
        //show loading screen
        const itemData = this.dataRetriever.getMuseumItemByCode(this.museumId, code);
        if (itemData) {
            this.itemPopup.show(itemData);
        }
    }

    close() {
        this.museumId = null;
    }
}