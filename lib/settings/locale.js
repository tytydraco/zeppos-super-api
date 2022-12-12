export var Locale;
(function (Locale) {
    Locale.Languages = {
        0: {
            "code": "zh-CN",
            "language": "Simplified"
        },
        1: {
            "code": "zh-TW",
            "language": "Traditional"
        },
        2: {
            "code": "en-US",
            "language": "English"
        },
        3: {
            "code": "es-ES",
            "language": "Spanish"
        },
        4: {
            "code": "ru-RU",
            "language": "Russian"
        },
        5: {
            "code": "ko-KR",
            "language": "Korean"
        },
        6: {
            "code": "fr-FR",
            "language": "French"
        },
        7: {
            "code": "de-DE",
            "language": "German"
        },
        8: {
            "code": "id-ID",
            "language": "Indonesian"
        },
        9: {
            "code": "pl-PL",
            "language": "Polish"
        },
        10: {
            "code": "it-IT",
            "language": "Italian"
        },
        11: {
            "code": "ja-JP",
            "language": "Japanese"
        },
        12: {
            "code": "th-TH",
            "language": "Thai"
        },
        13: {
            "code": "ar-EG",
            "language": "Arabic"
        },
        14: {
            "code": "vi-VN",
            "language": "Vietnamese"
        },
        15: {
            "code": "pt-PT",
            "language": "Portuguese"
        },
        16: {
            "code": "nl-NL",
            "language": "Dutch"
        },
        17: {
            "code": "tr-TR",
            "language": "Turkish"
        },
        18: {
            "code": "uk-UA",
            "language": "Ukrainian"
        },
        19: {
            "code": "iw-IL",
            "language": "Hebrew"
        },
        20: {
            "code": "pt-BR",
            "language": "Portuguese"
        },
        21: {
            "code": "ro-RO",
            "language": "Romanian"
        },
        22: {
            "code": "cs-CZ",
            "language": "Czech"
        },
        23: {
            "code": "el-GR",
            "language": "Greek"
        },
        24: {
            "code": "sr-RS",
            "language": "Serbian"
        },
        25: {
            "code": "ca-ES",
            "language": "Catalan"
        },
        26: {
            "code": "fi-FI",
            "language": "Finnish"
        },
        27: {
            "code": "nb-NO",
            "language": "Norwegian"
        },
        28: {
            "code": "da-DK",
            "language": "Danish"
        },
        29: {
            "code": "sv-SE",
            "language": "Swedish"
        },
        30: {
            "code": "hu-HU",
            "language": "Hungarian"
        },
        31: {
            "code": "ms-MY",
            "language": "Malay"
        },
        32: {
            "code": "sk-SK",
            "language": "Slovakian"
        },
        33: {
            "code": "hi-IN",
            "language": "Hindi"
        },
    };
    let MeasurementUnit;
    (function (MeasurementUnit) {
        MeasurementUnit[MeasurementUnit["Metric"] = 0] = "Metric";
        MeasurementUnit[MeasurementUnit["Imperial"] = 1] = "Imperial";
    })(MeasurementUnit = Locale.MeasurementUnit || (Locale.MeasurementUnit = {}));
    let WeightUnit;
    (function (WeightUnit) {
        WeightUnit[WeightUnit["Kilogram"] = 0] = "Kilogram";
        WeightUnit[WeightUnit["Jin"] = 1] = "Jin";
        WeightUnit[WeightUnit["Pound"] = 2] = "Pound";
        WeightUnit[WeightUnit["Stone"] = 3] = "Stone";
    })(WeightUnit = Locale.WeightUnit || (Locale.WeightUnit = {}));
    let DateFormat;
    (function (DateFormat) {
        DateFormat[DateFormat["YearMonthDay"] = 0] = "YearMonthDay";
        DateFormat[DateFormat["DayMonthYear"] = 1] = "DayMonthYear";
        DateFormat[DateFormat["MonthDayYear"] = 2] = "MonthDayYear";
    })(DateFormat = Locale.DateFormat || (Locale.DateFormat = {}));
    let TimeFormat;
    (function (TimeFormat) {
        TimeFormat[TimeFormat["Twelve"] = 0] = "Twelve";
        TimeFormat[TimeFormat["TwentyFour"] = 1] = "TwentyFour";
    })(TimeFormat = Locale.TimeFormat || (Locale.TimeFormat = {}));
    function getMeasurementUnit() {
        return hmSetting.getMileageUnit();
    }
    Locale.getMeasurementUnit = getMeasurementUnit;
    function getWeightUnit() {
        return hmSetting.getWeightUnit();
    }
    Locale.getWeightUnit = getWeightUnit;
    function getLanguage() {
        return Locale.Languages[hmSetting.getLanguage()];
    }
    Locale.getLanguage = getLanguage;
    function getDateFormat() {
        return hmSetting.getDateFormat();
    }
    Locale.getDateFormat = getDateFormat;
    function getTimeFormat() {
        return hmSetting.getTimeFormat();
    }
    Locale.getTimeFormat = getTimeFormat;
})(Locale || (Locale = {}));
