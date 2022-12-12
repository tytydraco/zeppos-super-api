export declare namespace Locale {
    type Language = {
        code: string;
        language: string;
    };
    const Languages: Record<string, Language>;
    enum MeasurementUnit {
        Metric = 0,
        Imperial = 1
    }
    enum WeightUnit {
        Kilogram = 0,
        Jin = 1,
        Pound = 2,
        Stone = 3
    }
    enum DateFormat {
        YearMonthDay = 0,
        DayMonthYear = 1,
        MonthDayYear = 2
    }
    enum TimeFormat {
        Twelve = 0,
        TwentyFour = 1
    }
    function getMeasurementUnit(): MeasurementUnit;
    function getWeightUnit(): WeightUnit;
    function getLanguage(): Language;
    function getDateFormat(): DateFormat;
    function getTimeFormat(): TimeFormat;
}
