export namespace Scroll {
    export enum Direction {
        Vertical,
        Horizontal,
    }

    export function enable() {
        hmUI.setLayerScrolling(true)
    }

    export function disable() {
        hmUI.setLayerScrolling(false)
    }

    export function enableFullPage(pageHeight: number, pageCount: number, scrollDirection: Direction): boolean {
        return hmUI.setScrollView(true, pageHeight, pageCount, (scrollDirection == Direction.Vertical))
    }

    export function disableFullPage(): boolean {
        return hmUI.setScrollView(false)
    }

    export function getPageIndex(): number {
        return hmUI.getScrollCurrentPage()
    }

    export function setPageIndex(index: number, animate: boolean = true) {
        hmUI.scrollToPage(index, animate)
    }
}