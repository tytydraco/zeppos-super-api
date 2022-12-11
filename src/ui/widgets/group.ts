import { Widget } from "./widget"

export class Group extends Widget<Group.Configuration> {
    constructor(config: Group.Configuration) {
        super()
        this.widget = hmUI.createWidget(hmUI.widget.GROUP, this.toNative(config))

        for (const child of config.children) {
            this.widget.createWidget()
        }
    }



    toNative(config: Group.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
        }
    }
}

export namespace Group {
    export interface Configuration {
        x: number,
        y: number,
        width: number,
        height: number,
        children: Array<Widget<any>>,
    }
}