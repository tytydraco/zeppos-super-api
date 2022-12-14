import { View, Rectangle, debug, Animation, Button, CheckBoxGroup, StateButton, Circle, DatePicker, Clock, Text, Scroll } from "zeppos-super-api";

let currentDate = new Date();

const anim = new Animation({
  x: 0,
  y: 100,
  path: 'pikachu/',
  prefix: 'frame',
  imageCount: 2,
  framesPerSecond: 4,
  extension: 'png',
  autoStart: true,
})

const date = new DatePicker({
  x: 0,
  y: 150,
  width: 100,
  initialDate: currentDate,
  fontSize: 1,
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
    r,
    new Rectangle({
      x: 0,
      y: 50,
      width: 100,
      height: 50,
      color: 0xff0000,
      borderThickness: 5,
      radius: 10,
    }),
    anim,
    new Button({
      x: 0,
      y: 150,
      width: 100,
      height: 50,
      text: 'pause/play anim',
      color: 0x00ff00,
      pressedColor: 0x00aa00,
      fontSize: 24,
      radius: 10,
      textColor: 0xffffff,
      onClick() {
        console.log(JSON.stringify(date.widget.getProperty(hmUI.prop.MORE, {})));
        console.log(date.getDate().toISOString());

        const curStatus = anim.getStatus()
        if (curStatus == Animation.Status.Running) {
          anim.pause()
        } else {
          anim.resume()
        }
      },
    }),
    new CheckBoxGroup({
      x: 0,
      y: 200,
      width: 100,
      height: 50,
      imagePath: 'pikachu/frame_0.png',
      selectedImagePath: 'pikachu/frame_1.png',
      buttons: [
        new StateButton({
          x: 0,
          y: 0,
          width: 50,
          height: 25,
        }),
        new StateButton({
          x: 0,
          y: 25,
          width: 50,
          height: 25,
        }),
      ],
      onClick(index, checked) {
        debug(`button ${index} is ${checked}`)
      }
    }),
    new Circle({
      x: 0,
      y: 250,
      radius: 25,
      color: 0xaaaaff,
    }),
    date,
  ]
})
