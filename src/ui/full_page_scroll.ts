export namespace FullPageScroll {
    export enum Direction {
        Vertical,
        Horizontal,
    }

    export function enable(pageHeight: number, pageCount: number, scrollDirection: Direction): boolean {
        return hmUI.setScrollView(true, pageHeight, pageCount, (scrollDirection == Direction.Vertical))
    }

    export function disable(): boolean {
        return hmUI.setScrollView(false)
    }

    export function getPageIndex(): number {
        return hmUI.getScrollCurrentPage()
    }

    export function setPageIndex(index: number, animate: boolean = true) {
        hmUI.scrollToPage(index, animate)
    }
}