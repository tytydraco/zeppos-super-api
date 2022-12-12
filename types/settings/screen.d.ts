export declare namespace Screen {
    enum Shape {
        Rectangular = 0,
        Round = 1
    }
    function getAutoBrightness(): boolean;
    function setAutoBrightness(value: boolean): void;
    function getBrightness(): number;
    function setBrightness(value: number): void;
    function setTimeout(seconds: number): void;
    function cancelTimeout(): void;
    function screenOff(): void;
}
