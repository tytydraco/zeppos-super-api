import { Cancellable } from "../cancellable";
export declare namespace Bluetooth {
    function connect(callback: (subpackageIndex?: number, data?: object, dataSize?: number) => void): Cancellable;
    function sendData(data?: object, dataSize?: number): void;
    function isConnected(): boolean;
    function onConnectedChange(callback: (status: boolean) => void): Cancellable;
}
