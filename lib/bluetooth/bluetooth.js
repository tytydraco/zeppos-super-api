export var Bluetooth;
(function (Bluetooth) {
    function connect(callback) {
        hmBle.createConnect(callback);
        return {
            cancel() {
                hmBle.disConnect();
            }
        };
    }
    Bluetooth.connect = connect;
    function sendData(data, dataSize) {
        hmBle.send(data, dataSize);
    }
    Bluetooth.sendData = sendData;
    function isConnected() {
        return hmBle.connectStatus();
    }
    Bluetooth.isConnected = isConnected;
    function onConnectedChange(callback) {
        hmBle.addListener(callback);
        return {
            cancel() {
                hmBle.removeListener();
            }
        };
    }
    Bluetooth.onConnectedChange = onConnectedChange;
})(Bluetooth || (Bluetooth = {}));
