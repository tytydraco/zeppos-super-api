import { Cancellable } from "../cancellable";
export declare namespace Events {
    enum Gesture {
        Up,
        Down,
        Left,
        Right
    }
    enum Key {
        Up,
        Down,
        Select,
        Back,
        Home,
        Shortcut
    }
    enum Action {
        Click,
        DoubleClick,
        Hold,
        Press,
        Release
    }
    function onGesture(callback: (gesture: Gesture) => boolean): Cancellable;
    function onKey(callback: (key: Key, action: Action) => boolean): Cancellable;
    function onCrownTurn(callback: (degree: number) => boolean): Cancellable;
}
