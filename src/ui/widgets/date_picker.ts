import { Builder, Widget } from "./widget"

export class DatePicker extends Widget<DatePicker.Configuration> {
    build(builder: Builder = hmUI): void {
        this.widget = builder.createWidget(hmUI.widget.PICK_DATE, this.toNative(this.config))
    }

    toNative(config: DatePicker.Configuration): Record<string, any> {
        return {
            x: config.x,
            y: config.y,
            w: config.width,
            initYear: config.initialDate?.getFullYear(),
            initMonth: config.initialDate?.getMonth() + 1,
            initDay: config.initialDate?.getDay(),
        }
    }

    getDate(): Date {
        const dateObject = this.widget.getProperty<Record<string, number>>(hmUI.prop.MORE, {})
        return new Date(Date.UTC(dateObject.year, dateObject.month - 1, dateObject.day))
    }
}

export namespace DatePicker {
    export interface Configuration {
        x: number,
        y: number,

        width?: number,
        initialDate?: Date,
    }
}