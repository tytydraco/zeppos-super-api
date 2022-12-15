export var Scheduling;
(function (Scheduling) {
    function createAlarm(appId, pagePath, date, delayMilliseconds, createParameters) {
        const alarmId = hmApp.alarmNew({
            appId: appId,
            url: pagePath,
            date: (date !== undefined) ? (date.getTime() / 1000) : undefined,
            delay: (delayMilliseconds !== undefined) ? (delayMilliseconds / 1000) : undefined,
            param: createParameters,
        });
        return {
            cancel: () => {
                hmApp.alarmCancel(alarmId);
            }
        };
    }
    Scheduling.createAlarm = createAlarm;
    function createTimer(delayMilliseconds, repeatMilliseconds, callback) {
        const timerId = timer.createTimer(delayMilliseconds, repeatMilliseconds, callback, null);
        return {
            cancel: () => {
                timer.stopTimer(timerId);
            }
        };
    }
    Scheduling.createTimer = createTimer;
})(Scheduling || (Scheduling = {}));
