import { Cancellable } from "../cancellable";
export declare namespace Scheduling {
    function createAlarm(appId: number, pagePath?: string, date?: Date, delayMilliseconds?: number, createParameters?: string): Cancellable;
    function createTimer(delayMilliseconds: number, repeatMilliseconds: number, callback: () => void): Cancellable;
}
