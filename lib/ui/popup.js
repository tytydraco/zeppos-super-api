export var PopUp;
(function (PopUp) {
    function present(message) {
        hmUI.showToast({ text: message });
    }
    PopUp.present = present;
})(PopUp || (PopUp = {}));
