class Camera {
    constructor () {
        console.log("Camera Initialization");

        this.location;
        this.angle;
    }
}

let myCamera1 = new Camera();

myCamera1.location = "BreakRoom";

console.log(myCamera1.location);