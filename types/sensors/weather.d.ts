export declare class Weather {
    private sensor;
    getCityName(): string;
    getForecast(): Array<Weather.Forecast>;
    getSunlight(): Array<Weather.Sunlight>;
}
export declare namespace Weather {
    enum WeatherType {
        Sunny = 3,
        SunnyNightTime = 28,
        Cloudy = 0,
        CloudyNightTime = 26,
        Overcast = 4,
        Hazy = 14,
        Fog = 13,
        Showers = 1,
        ShowersNightTime = 27,
        LightRain = 5,
        ModerateRain = 7,
        HeavyRain = 10,
        RainAndHail = 19,
        RainStorm = 18,
        HeavyRainStorm = 21,
        VeryHeavyRainstorm = 24,
        ThunderStorms = 15,
        ThunderStormsAndHail = 20,
        RainAndSnow = 12,
        SnowShowers = 2,
        LightSnow = 6,
        ModerateSnow = 8,
        HeavySnow = 9,
        SnowStorm = 16,
        SandStorm = 11,
        HeavySandstorm = 23,
        FloatingDust = 17,
        Dust = 22,
        Unknown = 25
    }
    interface Forecast {
        highTemperature: number;
        lowTemperature: number;
        weather: WeatherType;
    }
    interface Sunlight {
        sunriseHour: number;
        sunriseMinute: number;
        sunsetHour: number;
        sunsetMinute: number;
    }
}
