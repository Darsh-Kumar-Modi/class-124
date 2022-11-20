var noseX=0;
var noseY=0;
var wristLS=0;
var wristRS=0;
difference=0;

function setup(){
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(500,400);
    canvas.position(600,130);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("modelLoaded");
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nosex = " +noseX+ "noseY = "+ noseY);
    wristLS=results[0].pose.leftWrist.x;
    wristRS=results[0].pose.rightWrist.x;
    difference=floor(wristRS-wristLS);
    console.log( "leftwrist="+wristLS +" right wrist="+wristRS + " difference="+difference);
}
}
function draw(){
    background(1,0,22);
    document.getElementById("square_sides").innerHTML="Width and height of the square will be = "+ difference;
    fill("white");
    stroke("yellow");
    square(noseX,noseY,difference);
}