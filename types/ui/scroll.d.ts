export declare namespace Scroll {
    enum Direction {
        Vertical = 0,
        Horizontal = 1
    }
    function enable(): void;
    function disable(): void;
    function enableFullPage(pageHeight: number, pageCount: number, scrollDirection: Direction): boolean;
    function disableFullPage(): boolean;
    function getPageIndex(): number;
    function setPageIndex(index: number, animate?: boolean): void;
}
