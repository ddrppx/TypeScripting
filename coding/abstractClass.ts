abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    // getSepia(): void // Error
    abstract getSepia(): void; // Ok

    getReelTime(): number {
        // Calculations
        return 7
    }
}

class Instagram extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void{
        console.log("Sepia")
    }
}

// const test = new TakePhoto("Front", "None", 2); // Error
const test = new Instagram("Front", "None", 2); // Ok
