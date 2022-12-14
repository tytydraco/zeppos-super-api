import { Builder, Widget } from "./widget";
export declare class Animation extends Widget<Animation.Configuration> {
    build(builder?: Builder): void;
    toNative(config: Animation.Configuration): Record<string, any>;
    start(): void;
    pause(): void;
    resume(): void;
    stop(): void;
    getStatus(): Animation.Status;
}
export declare namespace Animation {
    enum RepeatMode {
        None = 0,
        Once = 1,
        Infinite = 2
    }
    enum Status {
        Running,
        Paused,
        Stopped
    }
    interface Configuration {
        x: number;
        y: number;
        prefix: string;
        imageCount: number;
        path?: string;
        extension?: string;
        framesPerSecond?: number;
        autoStart?: boolean;
        repeat?: RepeatMode;
        onComplete?: () => void;
    }
}
