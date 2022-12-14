import { Widget } from "./widget";
export class Stack extends Widget {
    build(builder = hmUI) {
        /* Fit the size if user does not specify it. */
        if (this.config.direction == Stack.Direction.Vertical && this.config.height == null) {
            this.config.height = this.getTotalSize();
        }
        else if (this.config.direction == Stack.Direction.Horizontal && this.config.width == null) {
            this.config.width = this.getTotalSize();
        }
        this.widget = builder.createWidget(hmUI.widget.GROUP, this.toNative(this.config));
        let offset = 0;
        for (const child of this.config.children) {
            const childSize = this.getChildSize(child);
            const childOffset = this.getChildOffset(child);
            this.addChildOffset(child, offset);
            console.log(`SET ${typeof child} to size ${childSize} + pos ${childOffset} + off ${offset}`);
            child.build(this.widget);
            offset += childSize + childOffset;
        }
    }
    getTotalSize() {
        let size = 0;
        for (const child of this.config.children) {
            size += this.getChildSize(child);
        }
        return size;
    }
    getChildSize(child) {
        if ((this.config.direction == Stack.Direction.Vertical) && child.config.height != null) {
            return child.config.height;
        }
        else if ((this.config.direction == Stack.Direction.Horizontal) && child.config.width != null) {
            return child.config.width;
        }
        else if (child.config.radius != null) {
            return child.config.radius * 2;
        }
        else {
            return 0;
        }
    }
    getChildOffset(child) {
        if (this.config.direction == Stack.Direction.Vertical) {
            return child.config.y;
        }
        else {
            return child.config.x;
        }
    }
    addChildOffset(child, offset) {
        if (this.config.direction == Stack.Direction.Vertical) {
            child.config.y += offset;
        }
        else {
            child.config.x += offset;
        }
    }
    toNative(config) {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            h: config.height,
        };
    }
}
(function (Stack) {
    let Direction;
    (function (Direction) {
        Direction[Direction["Vertical"] = 0] = "Vertical";
        Direction[Direction["Horizontal"] = 1] = "Horizontal";
    })(Direction = Stack.Direction || (Stack.Direction = {}));
})(Stack || (Stack = {}));
