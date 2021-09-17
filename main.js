NoseX = 0;
NoseY = 0;
difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 490);

    canvas = createCanvas(500, 490);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw()
{
    background('#6e6c6b');

    document.getElementById("square_side").innerHTML = "Width And Height of a Square Will Be = " + difference + "px";

    fill('#001691')
    stroke('#001691');
    square(NoseX, NoseY, difference);
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        NoseX = results[0].pose.nose.x;
        NoseY = results[0].pose.nose.y;
        console.log("NoseX = " + NoseX + " & NoseY = " + NoseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " & rightWristX = " + rightWristX + " & difference = " + difference);
    }
}