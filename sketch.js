const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hr;
function preload() {
    // create getBackgroundImg( ) here
    getTime();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg)
    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here
    if(hr>=12) {
        text("time"+hr%12+"pm",50,100) 
        
    } else if(hr=0) {
        text("time:12am",30,100)
    } else {
        text("time"+hr%12+"am",50,100)
    }

}

async function getTime(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Detroit");
    var rJSON = await response.json();
    var dt = rJSON.datetime;
    hr = dt.slice(11,13);
    if(hr >= 04 && hr<=06) {
        bg = "sunrise1.png"
    }
    else if(hr>=06 && hr<=08) {
         bg = "sunrise2.png"
     }
    else if(hr>=08 && hr<=10) {
        bg = "sunrise3.png"
    }
    else if(hr>=10 && hr<=12) {
        bg = "sunrise4.png"
    }
    else if(hr>=12 && hr<=14) {
        bg = "sunrise5.png"
    }
    else if(hr>=14 && hr<=16) {
        bg = "sunrise6.png"
    }
    else if(hr>=18 && hr<=20) {
        bg = "sunset7.png"
    }
    else if(hr>=20 && hr<=22) {
        bg = "sunset8.png"
    }
    else if(hr>=22 && hr<=24) {
        bg = "sunset9.png"
    }
    else if(hr>=00 && hr<=02) {
        bg = "sunset10.png"
    }
    else if(hr>=02 && hr<=04) {
        bg = "sunset11.png"
    }
    backgroundImg = loadImage(bg);
}
