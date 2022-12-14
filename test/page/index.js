import { View, Rectangle, debug, Animation, Button, CheckBoxGroup, StateButton, Circle, DatePicker, Clock, Text, Scroll, Stack } from "zeppos-super-api";

let currentDate = new Date();

const anim = new Animation({
  x: 150,
  y: 50,
  path: 'pikachu/',
  prefix: 'frame',
  imageCount: 2,
  framesPerSecond: 4,
  extension: 'png',
  autoStart: true,
})

const r = new Rectangle({
  x: 0,
  y: 0,
  width: 100,
  height: 50,
  color: 0xff0000,
  radius: 10,
  filled: true,
})

new View({
  onInitialize() {
    debug('View init')
    Scroll.enable()
    debug(`its ${currentDate.toISOString()}`)
  },
  onBuild() {
    debug('View build')

    r.widget.addEventListener(hmUI.event.MOVE_IN, function (info) {
      debug(JSON.stringify(info))
    })

    r.widget.addEventListener(hmUI.event.MOVE_OUT, function (info) {
      debug(JSON.stringify(info))
    })
  },
  onDestroy() {
    debug('View destroy')
  },
  children: [
    anim,
    new Stack({
      direction: Stack.Direction.Vertical,
      x: 0,
      y: 0,
      children: [
        r,
        new Rectangle({
          x: 0,
          y: 0,
          width: 100,
          height: 50,
          color: 0xff0000,
          borderThickness: 5,
          radius: 10,
        }),
        new Button({
          x: 20,
          y: 20,
          width: 100,
          height: 50,
          text: 'pause/play anim',
          color: 0x00ff00,
          pressedColor: 0x00aa00,
          fontSize: 24,
          radius: 10,
          textColor: 0xffffff,
          onClick() {
            const curStatus = anim.getStatus()
            if (curStatus == Animation.Status.Running) {
              anim.pause()
            } else {
              anim.resume()
            }
          },
        }),
        new Circle({
          x: 0,
          y: 20,
          radius: 25,
          color: 0xaaaaff,
        }),
      ]
    })
  ]
})
