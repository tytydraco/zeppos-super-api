import { Cancellable } from "../cancellable";

export namespace Bluetooth {
    export function connect(callback: (subpackageIndex?: number, data?: object, dataSize?: number) => void): Cancellable {
        hmBle.createConnect(callback)

        return {
            cancel() {
                hmBle.disConnect()
            }
        }
    }

    export function sendData(data?: object, dataSize?: number) {
        hmBle.send(data, dataSize)
    }

    export function isConnected(): boolean {
        return hmBle.connectStatus()
    }

    export function onConnectedChange(callback: (status: boolean) => void): Cancellable {
        hmBle.addListener(callback)

        return {
            cancel() {
                hmBle.removeListener()
            }
        }
    }
}