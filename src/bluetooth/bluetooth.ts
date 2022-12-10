import { Listener } from "../callback";

export namespace Bluetooth {
    export function connect(callback: (subpackageIndex?: number, data?: object, dataSize?: number) => void): Listener {
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

    export function onConnectedChange(callback: (status: boolean) => void): Listener {
        hmBle.addListener(callback)

        return {
            cancel() {
                hmBle.removeListener()
            }
        }
    }
}