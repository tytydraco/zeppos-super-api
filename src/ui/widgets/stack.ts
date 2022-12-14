import { Builder, Widget } from "./widget"

export class Stack extends Widget<Stack.Configuration> {
    build(builder: Builder = hmUI): void {
        /* Fit the size if user does not specify it. */
        if (this.config.direction == Stack.Direction.Vertical && this.config.height == null) {
            this.config.height = this.getTotalSize()
        } else if (this.config.direction == Stack.Direction.Horizontal && this.config.width == null) {
            this.config.width = this.getTotalSize()
        }

        this.widget = builder.createWidget(hmUI.widget.GROUP, this.toNative(this.config))

        let offset = 0
        for (const child of this.config.children) {
            const childSize = this.getChildSize(child)
            const childOffset = this.getChildOffset(child)
            this.addChildOffset(child, offset)
            console.log(`SET ${typeof child} to size ${childSize} + pos ${childOffset} + off ${offset}`);


            child.build(this.widget)

            offset += childSize + childOffset
        }
    }

    private getTotalSize(): number {
        let size = 0
        for (const child of this.config.children) {
            size += this.getChildSize(child)
        }

        return size
    }

    private getChildSize(child: Widget<any>): number {
        if ((this.config.direction == Stack.Direction.Vertical) && child.config.height != null) {
            return child.config.height
        } else if ((this.config.direction == Stack.Direction.Horizontal) && child.config.width != null) {
            return child.config.width
        } else if (child.config.radius != null) {
            return child.config.radius * 2
        } else {
            return 0
        }
    }

    private getChildOffset(child: Widget<any>): number {
        if (this.config.direction == Stack.Direction.Vertical) {
            return child.config.y
        } else {
            return child.config.x
        }
    }

    private addChildOffset(child: Widget<any>, offset: number) {
        if (this.config.direction == Stack.Direction.Vertical) {
            child.config.y += offset
        } else {
            child.config.x += offset
        }
    }

    toNative(config: Stack.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
        }
    }
}

export namespace Stack {
    export enum Direction {
        Vertical,
        Horizontal,
    }

    export interface Configuration {
        direction: Direction,
        x: number,
        y: number,
        width?: number,
        height?: number,
        children: Array<Widget<any>>,
    }
}