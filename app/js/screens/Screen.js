export class Screen {
  constructor() {
    this.screenId = null;
  }

  show() {
    $(".screen").hide();
    this.getDomEl().show();
  }

  getDomEl() {
    return $("#" + this.screenId);
  }
}
