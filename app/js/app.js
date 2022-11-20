import {Catalog} from "./screens/Catalog.js";

class App {
    constructor() {
        this.screens = {
            catalog: new Catalog(),
        };
        this.screen = null;
        this.init();
    }

    init() {
        if (this.screen === null) {
            this.screens["catalog"].show();
        }
    }
}

let app;
$(document).ready(function () {
    $.qrCodeReader.jsQRpath = "js/lib/qrreader/js/jsQR/jsQR.js";
    $.qrCodeReader.beepPath = "js/lib/qrreader/audio/beep.mp3";
    app = new App();
});
