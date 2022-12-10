import { Listener } from "../callback";

export namespace Events {
    export enum Gesture {
        Up = hmApp.gesture.UP,
        Down = hmApp.gesture.DOWN,
        Left = hmApp.gesture.LEFT,
        Right = hmApp.gesture.RIGHT,
    }

    export enum Key {
        Up = hmApp.key.UP,
        Down = hmApp.key.DOWN,
        Select = hmApp.key.SELECT,
        Back = hmApp.key.BACK,
        Home = hmApp.key.HOME,
        Shortcut = hmApp.key.SHORTCUT,
    }

    export enum Action {
        Click = hmApp.action.CLICK,
        DoubleClick = hmApp.action.DOUBLE_CLICK,
        Hold = hmApp.action.LONG_PRESS,
        Press = hmApp.action.PRESS,
        Release = hmApp.action.RELEASE,
    }

    export function onGesture(callback: (gesture: Gesture) => boolean): Listener {
        hmApp.registerGestureEvent(callback)

        return {
            cancel() {
                hmApp.unregisterGestureEvent()
            }
        }
    }

    export function onKey(callback: (key: Key, action: Action) => boolean): Listener {
        hmApp.registerKeyEvent(callback)

        return {
            cancel() {
                hmApp.unregisterKeyEvent()
            }
        }
    }

    export function onCrownTurn(callback: (degree: number) => boolean): Listener {
        hmApp.registerSpinEvent((_, degree) => callback(degree))

        return {
            cancel() {
                hmApp.unregisterSpinEvent()
            }
        }
    }
}