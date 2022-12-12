import { Cancellable } from "../cancellable";
export declare class Music {
    private sensor;
    constructor();
    getArtist(): string;
    getTitle(): string;
    getIsPlaying(): boolean;
    initialize(): void;
    play(): void;
    pause(): void;
    previous(): void;
    forward(): void;
    onMusicChange(callback: () => void): Cancellable;
}
