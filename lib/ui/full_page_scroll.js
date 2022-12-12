export var FullPageScroll;
(function (FullPageScroll) {
    let Direction;
    (function (Direction) {
        Direction[Direction["Vertical"] = 0] = "Vertical";
        Direction[Direction["Horizontal"] = 1] = "Horizontal";
    })(Direction = FullPageScroll.Direction || (FullPageScroll.Direction = {}));
    function enable(pageHeight, pageCount, scrollDirection) {
        return hmUI.setScrollView(true, pageHeight, pageCount, (scrollDirection == Direction.Vertical));
    }
    FullPageScroll.enable = enable;
    function disable() {
        return hmUI.setScrollView(false);
    }
    FullPageScroll.disable = disable;
    function getPageIndex() {
        return hmUI.getScrollCurrentPage();
    }
    FullPageScroll.getPageIndex = getPageIndex;
    function setPageIndex(index, animate = true) {
        hmUI.scrollToPage(index, animate);
    }
    FullPageScroll.setPageIndex = setPageIndex;
})(FullPageScroll || (FullPageScroll = {}));
