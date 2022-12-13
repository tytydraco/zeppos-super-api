import { Builder, Widget } from "./widget"

export class Animation extends Widget<Animation.Configuration> {
    build(builder: Builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.IMG_ANIM, this.toNative(this.config))

        if (this.config.autoStart) {
            this.start()
        }
    }

    toNative(config: Animation.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            anim_path: config.path,
            anim_prefix: config.prefix,
            anim_ext: config.extension,
            anim_fps: config.framesPerSecond,
            repeat_count: config.repeat == Animation.RepeatMode.Once ? 1 : 0,
            anim_repeat: config.repeat != Animation.RepeatMode.None,
            anim_size: config.imageCount,
            anim_complete_call: config.onComplete,
        }
    }

    start() {
        this.widget.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.START)
    }

    pause() {
        this.widget.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.PAUSE)
    }

    resume() {
        this.widget.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.RESUME)
    }

    stop() {
        this.widget.setProperty(hmUI.prop.ANIM_STATUS, hmUI.anim_status.STOP)
    }

    getStatus(): Animation.Status {
        if (this.widget.getProperty(hmUI.prop.ANIM_IS_RUNINNG))
            return Animation.Status.Running

        if (this.widget.getProperty(hmUI.prop.ANIM_IS_PAUSE))
            return Animation.Status.Paused

        if (this.widget.getProperty(hmUI.prop.ANIM_IS_STOP))
            return Animation.Status.Stopped
    }
}

export namespace Animation {
    export enum RepeatMode {
        None,
        Once,
        Infinite,
    }

    export enum Status {
        Running = hmUI.prop.ANIM_IS_RUNNING,
        Paused = hmUI.prop.ANIM_IS_PAUSE,
        Stopped = hmUI.prop.ANIM_IS_STOP,
    }

    export interface Configuration extends Widget.Configuration {
        x: number,
        y: number,
        path: string,
        prefix: string,
        extension: string,
        framesPerSecond: number,
        imageCount: number,

        autoStart?: boolean,
        repeat?: RepeatMode,
        onComplete?: () => void,
    }
}