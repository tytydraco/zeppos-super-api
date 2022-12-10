import { Cancellable } from "../cancellable"

export class Music {
    private sensor = hmSensor.createSensor(hmSensor.id.MUSIC)

    constructor() {
        this.initialize()
    }

    getArtist(): string {
        return this.sensor.artist
    }

    getTitle(): string {
        return this.sensor.artist
    }

    getIsPlaying(): boolean {
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

    onMusicChange(callback: () => void): Cancellable {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback)

        return {
            cancel() {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback)
            }
        }
    }
}