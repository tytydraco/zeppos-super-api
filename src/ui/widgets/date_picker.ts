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
            font_size: config.fontSize,
            initYear: config.initialDate?.getFullYear(),
            initMonth: config.initialDate?.getMonth(),
            initDay: config.initialDate?.getDay(),
            initHour: config.initialDate?.getHours(),
            initMin: config.initialDate?.getMinutes(),
        }
    }

    getDate(): Date {
        const dateObject = this.widget.getProperty<Record<string, number>>(hmUI.prop.MORE)
        return new Date(dateObject.year, dateObject.month, dateObject.day, dateObject.hour, dateObject.minute)
    }
}

export namespace DatePicker {
    export interface Configuration {
        x: number,
        y: number,

        width?: number,
        fontSize?: number
        initialDate?: Date,
    }
}