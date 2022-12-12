export declare class Vibration {
    private sensor;
    getPattern(): Vibration.Pattern;
    setPattern(pattern: Vibration.Pattern): void;
    start(pattern?: Vibration.Pattern): void;
    stop(): void;
}
export declare namespace Vibration {
    enum Pattern {
        LightShort = 23,
        MediumShort = 24,
        HighShort = 25,
        HighLong = 27,
        HighMedium = 28,
        Notification = 0,
        PhoneCall = 1,
        AlarmClock = 5,
        Urgent = 9
    }
}
