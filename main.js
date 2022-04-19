song1="";
song2="";

function preload(){
   song1=loadSound("music.mp3");
   song1=loadSound("music2.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

   video=createCapture(VIDEO) ;
   video.hide();

}

function play(){
song1.play();
song2.play();
}

function draw(){
    image(video,0,0,600,500);
}