var camera1 = document.getElementById("ap-camera-one");
var camera2 = document.getElementById("ap-camera-two");
var camera3 = document.getElementById("ap-camera-three");
var camera4 = document.getElementById("ap-camera-four");

var canvasColor = "gray";

var ctx1 = camera1.getContext("2d");
ctx1.font = "bold 12px Arial";
ctx1.fillText("Camera 1", 20, 20);
ctx1.fillStyle = "black";
// ctx1.fillStyle = canvasColor;
// ctx1.fillRect(0, 0, camera1.width, camera1.height);

var ctx2 = camera2.getContext("2d");
ctx2.font = "bold 12px Arial";
ctx2.fillText("Camera 2", 20, 20);
ctx2.fillStyle = "black";

var ctx3 = camera3.getContext("2d");
ctx3.font = "bold 12px Arial";
ctx3.fillText("Camera 3", 20, 20);
ctx3.fillStyle = "black";

var ctx4 = camera4.getContext("2d");
ctx4.font = "bold 12px Arial";
ctx4.fillText("Camera 4", 20, 20);
ctx4.fillStyle = "black";

let myCamera1 = new Camera();

myCamera1.location = "BreakRoom";

console.log(myCamera1.location);