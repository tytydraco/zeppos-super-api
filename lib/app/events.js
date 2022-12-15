export var Events;
(function (Events) {
    let Gesture;
    (function (Gesture) {
        Gesture[Gesture["Up"] = hmApp.gesture.UP] = "Up";
        Gesture[Gesture["Down"] = hmApp.gesture.DOWN] = "Down";
        Gesture[Gesture["Left"] = hmApp.gesture.LEFT] = "Left";
        Gesture[Gesture["Right"] = hmApp.gesture.RIGHT] = "Right";
    })(Gesture = Events.Gesture || (Events.Gesture = {}));
    let Key;
    (function (Key) {
        Key[Key["Up"] = hmApp.key.UP] = "Up";
        Key[Key["Down"] = hmApp.key.DOWN] = "Down";
        Key[Key["Select"] = hmApp.key.SELECT] = "Select";
        Key[Key["Back"] = hmApp.key.BACK] = "Back";
        Key[Key["Home"] = hmApp.key.HOME] = "Home";
        Key[Key["Shortcut"] = hmApp.key.SHORTCUT] = "Shortcut";
    })(Key = Events.Key || (Events.Key = {}));
    let Action;
    (function (Action) {
        Action[Action["Click"] = hmApp.action.CLICK] = "Click";
        Action[Action["DoubleClick"] = hmApp.action.DOUBLE_CLICK] = "DoubleClick";
        Action[Action["Hold"] = hmApp.action.LONG_PRESS] = "Hold";
        Action[Action["Press"] = hmApp.action.PRESS] = "Press";
        Action[Action["Release"] = hmApp.action.RELEASE] = "Release";
    })(Action = Events.Action || (Events.Action = {}));
    function onGesture(callback) {
        hmApp.registerGestureEvent(callback);
        return {
            cancel: () => {
                hmApp.unregisterGestureEvent();
            }
        };
    }
    Events.onGesture = onGesture;
    function onKey(callback) {
        hmApp.registerKeyEvent(callback);
        return {
            cancel: () => {
                hmApp.unregisterKeyEvent();
            }
        };
    }
    Events.onKey = onKey;
    function onCrownTurn(callback) {
        hmApp.registerSpinEvent((_, degree) => callback(degree));
        return {
            cancel: () => {
                hmApp.unregisterSpinEvent();
            }
        };
    }
    Events.onCrownTurn = onCrownTurn;
})(Events || (Events = {}));
