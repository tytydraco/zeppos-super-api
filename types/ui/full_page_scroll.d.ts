export declare namespace FullPageScroll {
    enum Direction {
        Vertical = 0,
        Horizontal = 1,
    }
    function enable(pageHeight: number, pageCount: number, scrollDirection: Direction): boolean;
    function disable(): boolean;
    function getPageIndex(): number;
    function setPageIndex(index: number, animate?: boolean): void;
}
