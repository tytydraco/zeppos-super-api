import { Widget } from "./widget"

export class DatePicker extends Widget<DatePicker.Configuration> {
    constructor(config: DatePicker.Configuration) {
        super()
        this.widget = hmUI.createWidget(hmUI.widget.PICK_DATE, this.toNative(config))
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