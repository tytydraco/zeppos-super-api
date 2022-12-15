export class Music {
    constructor() {
        this.sensor = hmSensor.createSensor(hmSensor.id.MUSIC);
        this.initialize();
    }
    getArtist() {
        return this.sensor.artist;
    }
    getTitle() {
        return this.sensor.artist;
    }
    getIsPlaying() {
        return this.sensor.isPlaying;
    }
    initialize() {
        this.sensor.audInit();
    }
    play() {
        this.sensor.audPlay();
    }
    pause() {
        this.sensor.audPause();
    }
    previous() {
        this.sensor.audPrev();
    }
    forward() {
        this.sensor.audNext();
    }
    onMusicChange(callback) {
        this.sensor.addEventListener(hmSensor.event.CHANGE, callback);
        return {
            cancel: () => {
                this.sensor.removeEventListener(hmSensor.event.CHANGE, callback);
            }
        };
    }
}
