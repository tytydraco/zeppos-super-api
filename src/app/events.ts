import { Cancellable } from "../cancellable";

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

    export function onGesture(callback: (gesture: Gesture) => boolean): Cancellable {
        hmApp.registerGestureEvent(callback)

        return {
            cancel: () => {
                hmApp.unregisterGestureEvent()
            }
        }
    }

    export function onKey(callback: (key: Key, action: Action) => boolean): Cancellable {
        hmApp.registerKeyEvent(callback)

        return {
            cancel: () => {
                hmApp.unregisterKeyEvent()
            }
        }
    }

    export function onCrownTurn(callback: (degree: number) => boolean): Cancellable {
        hmApp.registerSpinEvent((_: any, degree: number) => callback(degree))

        return {
            cancel: () => {
                hmApp.unregisterSpinEvent()
            }
        }
    }
}