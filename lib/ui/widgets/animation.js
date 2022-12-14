import { Widget } from "./widget";
export class Animation extends Widget {
    build(builder = hmUI) {
        this.widget = builder.createWidget(hmUI.widget.IMG_ANIM, this.toNative(this.config));
        if (this.config.autoStart) {
            this.start();
        }
    }
    toNative(config) {
        var _a, _b, _c;
        return {
            x: config.x,
            y: config.y,
            anim_path: (_a = config.path) !== null && _a !== void 0 ? _a : '',
            anim_prefix: (_b = config.prefix) !== null && _b !== void 0 ? _b : 'png',
            anim_ext: config.extension,
            anim_fps: (_c = config.framesPerSecond) !== null && _c !== void 0 ? _c : 30,
            repeat_count: config.repeat == Animation.RepeatMode.Once ? 1 : 0,
            anim_repeat: config.repeat != Animation.RepeatMode.None,
            anim_size: config.imageCount,
            anim_complete_call: config.onComplete,
        };
    }
    start() {
        this.widget.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.START);
    }
    pause() {
        this.widget.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.PAUSE);
    }
    resume() {
        this.widget.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.RESUME);
    }
    stop() {
        this.widget.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.STOP);
    }
    getStatus() {
        if (this.widget.getProperty(hmUI.prop.ANIM_IS_RUNINNG))
            return Animation.Status.Running;
        if (this.widget.getProperty(hmUI.prop.ANIM_IS_PAUSE))
            return Animation.Status.Paused;
        if (this.widget.getProperty(hmUI.prop.ANIM_IS_STOP))
            return Animation.Status.Stopped;
    }
}
(function (Animation) {
    let RepeatMode;
    (function (RepeatMode) {
        RepeatMode[RepeatMode["None"] = 0] = "None";
        RepeatMode[RepeatMode["Once"] = 1] = "Once";
        RepeatMode[RepeatMode["Infinite"] = 2] = "Infinite";
    })(RepeatMode = Animation.RepeatMode || (Animation.RepeatMode = {}));
    let Status;
    (function (Status) {
        Status[Status["Running"] = hmUI.prop.ANIM_IS_RUNNING] = "Running";
        Status[Status["Paused"] = hmUI.prop.ANIM_IS_PAUSE] = "Paused";
        Status[Status["Stopped"] = hmUI.prop.ANIM_IS_STOP] = "Stopped";
    })(Status = Animation.Status || (Animation.Status = {}));
})(Animation || (Animation = {}));
