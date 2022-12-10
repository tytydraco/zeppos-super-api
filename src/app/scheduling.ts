import { Cancellable } from "../cancellable";

export namespace Scheduling {
    export function createAlarm(appId: number, pagePath?: string, date?: Date, delayMilliseconds?: number, createParameters?: string): Cancellable {
        const alarmId = hmApp.alarmNew({
            appId: appId,
            url: pagePath,
            date: date.getTime() / 1000,
            delay: delayMilliseconds / 1000,
            param: createParameters,
        })

        return {
            cancel() {
                hmApp.alarmCancel(alarmId)
            }
        }
    }

    export function createTimer(delayMilliseconds: number, repeatMilliseconds: number, callback: () => void): Cancellable {
        const timerId = timer.createTimer(delayMilliseconds, repeatMilliseconds, callback, null)

        return {
            cancel() {
                timer.stopTimer(timerId)
            }
        }
    }
}