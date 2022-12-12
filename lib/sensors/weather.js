export class Weather {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.WEATHER);
    }
    getCityName() {
        return this.sensor.cityName;
    }
    getForecast() {
        const forecastData = this.sensor.forecastData;
        return forecastData.map(data => ({
            highTemperature: data.high,
            lowTemperature: data.low,
            weather: data.index,
        }));
    }
    getSunlight() {
        const tideData = this.sensor.tideData;
        return tideData.map(data => ({
            sunriseHour: data.sunrise.hour,
            sunriseMinute: data.sunrise.minute,
            sunsetHour: data.sunset.hour,
            sunsetMinute: data.sunset.minute,
        }));
    }
}
(function (Weather) {
    let WeatherType;
    (function (WeatherType) {
        WeatherType[WeatherType["Sunny"] = 3] = "Sunny";
        WeatherType[WeatherType["SunnyNightTime"] = 28] = "SunnyNightTime";
        WeatherType[WeatherType["Cloudy"] = 0] = "Cloudy";
        WeatherType[WeatherType["CloudyNightTime"] = 26] = "CloudyNightTime";
        WeatherType[WeatherType["Overcast"] = 4] = "Overcast";
        WeatherType[WeatherType["Hazy"] = 14] = "Hazy";
        WeatherType[WeatherType["Fog"] = 13] = "Fog";
        WeatherType[WeatherType["Showers"] = 1] = "Showers";
        WeatherType[WeatherType["ShowersNightTime"] = 27] = "ShowersNightTime";
        WeatherType[WeatherType["LightRain"] = 5] = "LightRain";
        WeatherType[WeatherType["ModerateRain"] = 7] = "ModerateRain";
        WeatherType[WeatherType["HeavyRain"] = 10] = "HeavyRain";
        WeatherType[WeatherType["RainAndHail"] = 19] = "RainAndHail";
        WeatherType[WeatherType["RainStorm"] = 18] = "RainStorm";
        WeatherType[WeatherType["HeavyRainStorm"] = 21] = "HeavyRainStorm";
        WeatherType[WeatherType["VeryHeavyRainstorm"] = 24] = "VeryHeavyRainstorm";
        WeatherType[WeatherType["ThunderStorms"] = 15] = "ThunderStorms";
        WeatherType[WeatherType["ThunderStormsAndHail"] = 20] = "ThunderStormsAndHail";
        WeatherType[WeatherType["RainAndSnow"] = 12] = "RainAndSnow";
        WeatherType[WeatherType["SnowShowers"] = 2] = "SnowShowers";
        WeatherType[WeatherType["LightSnow"] = 6] = "LightSnow";
        WeatherType[WeatherType["ModerateSnow"] = 8] = "ModerateSnow";
        WeatherType[WeatherType["HeavySnow"] = 9] = "HeavySnow";
        WeatherType[WeatherType["SnowStorm"] = 16] = "SnowStorm";
        WeatherType[WeatherType["SandStorm"] = 11] = "SandStorm";
        WeatherType[WeatherType["HeavySandstorm"] = 23] = "HeavySandstorm";
        WeatherType[WeatherType["FloatingDust"] = 17] = "FloatingDust";
        WeatherType[WeatherType["Dust"] = 22] = "Dust";
        WeatherType[WeatherType["Unknown"] = 25] = "Unknown";
    })(WeatherType = Weather.WeatherType || (Weather.WeatherType = {}));
})(Weather || (Weather = {}));
