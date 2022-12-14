export var Scroll;
(function (Scroll) {
    let Direction;
    (function (Direction) {
        Direction[Direction["Vertical"] = 0] = "Vertical";
        Direction[Direction["Horizontal"] = 1] = "Horizontal";
    })(Direction = Scroll.Direction || (Scroll.Direction = {}));
    function enable() {
        hmUI.setLayerScrolling(true);
    }
    Scroll.enable = enable;
    function disable() {
        hmUI.setLayerScrolling(false);
    }
    Scroll.disable = disable;
    function enableFullPage(pageHeight, pageCount, scrollDirection) {
        return hmUI.setScrollView(true, pageHeight, pageCount, (scrollDirection == Direction.Vertical));
    }
    Scroll.enableFullPage = enableFullPage;
    function disableFullPage() {
        return hmUI.setScrollView(false);
    }
    Scroll.disableFullPage = disableFullPage;
    function getPageIndex() {
        return hmUI.getScrollCurrentPage();
    }
    Scroll.getPageIndex = getPageIndex;
    function setPageIndex(index, animate = true) {
        hmUI.scrollToPage(index, animate);
    }
    Scroll.setPageIndex = setPageIndex;
})(Scroll || (Scroll = {}));
