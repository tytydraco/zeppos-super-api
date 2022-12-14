import { Cancellable } from "../../cancellable"

export abstract class Widget<T> {
    widget!: Internal

    constructor(public readonly config: T) { }

    abstract build(builder: Internal): void

    update(config: T) {
        this.widget.setProperty(hmUI.prop.MORE, this.toNative(config))
    }

    enable() {
        this.widget.setEnable(true)
    }

    disable() {
        this.widget.setEnable(false)
    }

    delete() {
        hmUI.deleteWidget(this.widget)
    }

    onDrag(callback: (x: number, y: number) => void): Cancellable {
        const innerCallback = (info: { x: number, y: number }) => {
            callback(info.x, info.y)
        }

        this.widget.addEventListener(hmUI.event.MOVE, innerCallback)
        return {
            cancel: () => {
                this.widget.removeEventListener(hmUI.event.MOVE, innerCallback)
            },
        }
    }

    onPress(callback: (x: number, y: number) => void): Cancellable {
        const innerCallback = (info: { x: number, y: number }) => {
            callback(info.x, info.y)
        }

        this.widget.addEventListener(hmUI.event.CLICK_DOWN, innerCallback)
        return {
            cancel: () => {
                this.widget.removeEventListener(hmUI.event.CLICK_DOWN, innerCallback)
            },
        }
    }

    onRelease(callback: (x: number, y: number) => void): Cancellable {
        const innerCallback = (info: { x: number, y: number }) => {
            callback(info.x, info.y)
        }

        this.widget.addEventListener(hmUI.event.CLICK_UP, innerCallback)
        return {
            cancel: () => {
                this.widget.removeEventListener(hmUI.event.CLICK_UP, innerCallback)
            },
        }
    }

    protected abstract toNative(config: T): Record<string, any>
}