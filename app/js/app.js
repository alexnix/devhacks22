import {Catalog} from "./screens/Catalog.js";
import {Auth} from "./screens/auth.js";
import {DataRetriever} from "./dataRetriever.js";

class App {
    constructor() {
        this.dataRetriever = new DataRetriever();
        this.catalog = new Catalog(this.dataRetriever);
        this.auth = new Auth();
        this.init();
    }

    init() {
        console.log("app");
        if (this.auth.getAuthToken() === null) {
            this.auth.autoLogin();
            return;
        }
        this.catalog.show();

    }
}

// let app;
// $(document).ready(function () {
$.qrCodeReader.jsQRpath = "js/lib/qrreader/js/jsQR/jsQR.js";
$.qrCodeReader.beepPath = "js/lib/qrreader/audio/beep.mp3";
let app = new App();
// });
