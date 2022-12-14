import { Program, Scroll, StatusBar } from "zeppos-super-api";

new Program({
  onCreate() {
    StatusBar.hide()
    Scroll.enable()
  }
})