export class Weather {
    private sensor = hmSensor.createSensor(hmSensor.id.WEATHER)

    getCityName(): string {
        return this.sensor.cityName
    }

    getForecast(): Array<Weather.Forecast> {
        const forecastData: Array<any> = this.sensor.forecastData
        return forecastData.map<Weather.Forecast>(data => (
            {
                highTemperature: data.high,
                lowTemperature: data.low,
                weather: data.index,
            }
        ))
    }

    getSunlight(): Array<Weather.Sunlight> {
        const tideData: Array<any> = this.sensor.tideData
        return tideData.map<Weather.Sunlight>(data => (
            {
                sunriseHour: data.sunrise.hour,
                sunriseMinute: data.sunrise.minute,
                sunsetHour: data.sunset.hour,
                sunsetMinute: data.sunset.minute,
            }
        ))
    }
}

export namespace Weather {
    export enum WeatherType {
        Cloudy,
        Showers,
        SnowShowers,
        Sunny,
        Overcast,
        LightRain,
        LightSnow,
        ModerateRain,
        ModerateSnow,
        HeavySnow,
        HeavyRain,
        Sandstorm,
        RainandSnow,
        Fog,
        Hazy,
        TStorms,
        Snowstorm,
        Floatingdust,
        RainStorm,
        RainAndHail,
        TStormsAndHail,
        HeavyRainstorm,
        Dust,
        Heavysandstorm,
        FIXME_Rainstorm, /* TODO: fix this */
        Unknown,
        CloudyNighttime,
        ShowersNighttime,
        SunnyNighttime,
    }

    export interface Forecast {
        highTemperature: number,
        lowTemperature: number,
        weather: WeatherType,
    }

    export interface Sunlight {
        sunriseHour: number,
        sunriseMinute: number,
        sunsetHour: number,
        sunsetMinute: number,
    }
}