var rightWrist = 0;
var leftWrist = 0;
var difference = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(450, 400);
    canvas.position(560, 200);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#d5bbff');

    textSize(difference);
    fill('#904aff');
    text('Hariti Mittal', 200, 200);
}

function modelLoaded() {
    console.log("PoseNet Is Initialized")
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        rightWrist = results[0].pose.rightWrist.x;
        leftWrist = results[0].pose.leftWrist.x;
        difference = floor(leftWrist - rightWrist);
        console.log("Right Wrist = " + rightWrist + ", Left Wrist = " + leftWrist + ", Difference = " + difference);
    }
}