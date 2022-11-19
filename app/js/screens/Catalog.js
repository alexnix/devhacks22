import { Screen } from "./Screen.js";
import { DataRetriever } from "../dataRetriever.js";

export class Catalog extends Screen {
  constructor() {
    super();
    this.screenId = "catalog-screen";
    this.dataRetriever = new DataRetriever();
  }

  show() {
    super.show();
    let list = $("<div></div>");
    const museumList = this.dataRetriever.getDataFor("museums");
    for (const i in museumList) {
      list.append(this.getMuseum(museumList[i]));
    }
    this.getDomEl().html(list);
    this.getDomEl().append(
      '<textarea id="qrReadLink"></textarea><input type="button" id="openreader-btn" value="Scan QRCode"/>'
    );
    $("#openreader-btn").qrCodeReader({
      target: "#target-input",
      audioFeedback: true,
      multiple: true,
      skipDuplicates: false,
      callback: function (codes) {
        console.log(codes);
      },
    });
    // $("#openreader-btn").click();
  }

  getMuseum(data) {
    return $(
      "<div>" +
        '<img src="' +
        data.cover +
        '">' +
        "<title>" +
        data.name +
        "</title>" +
        "</div>"
    );
  }
}
