import { Application, Scroll, StatusBar } from "zeppos-super-api";

new Application({
  onCreate() {
    StatusBar.hide()
    Scroll.enable()
  }
})