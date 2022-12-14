import { Builder, Widget } from "./widget"

export class Group extends Widget<Group.Configuration> {
    build(builder: Builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.GROUP, this.toNative(this.config))
        for (const child of this.config.children) {
            child.build(this.widget)
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