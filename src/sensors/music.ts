export class Music {
    private sensor: HmWearableProgram.DeviceSide.HmSensor.IHmSensorWidget

    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.MUSIC)

        this.initialize()
    }

    get artist(): string {
        return this.sensor.artist
    }

    get title(): string {
        return this.sensor.artist
    }

    get isPlaying(): boolean {
        return this.sensor.isPlaying
    }

    initialize() {
        this.sensor.audInit()
    }

    play() {
        this.sensor.audPlay()
    }

    pause() {
        this.sensor.audPause()
    }

    previous() {
        this.sensor.audPrev()
    }

    forward() {
        this.sensor.audNext()
    }

    onMusicChange(callback: () => void): void {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)
    }
}