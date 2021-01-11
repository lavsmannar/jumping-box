var canvas;
var music;

var box;
var surface1,surface2,surface3,surface4;

var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1=createSprite(100,500,180,20);
    surface2=createSprite(300,500,180,20);
    surface3=createSprite(500,500,180,20);
    surface4=createSprite(700,500,180,20);

    surface1.shapeColor='red';
    surface2.shapeColor='green';
    surface3.shapeColor='purple';
    surface4.shapeColor='yellow';

    //create box sprite and give velocity
    box=createSprite(random(50,750),100,20,20);
    box.velocityY=5;
}

function draw() {
    background(rgb(169,169,169));

    edges=createEdgeSprites();
    box.collide(edges);

    //add condition to check if box touching surface and make it box
    if(box.isTouching(surface1)){
        box.shapeColor='red';
    }
    if(box.isTouching(surface2)){
        box.shapeColor='green';
    }
    if(box.isTouching(surface3)){
        box.shapeColor='purple';
    }
    if(box.isTouching(surface4)){
        box.shapeColor='yellow';
    }
    drawSprites();
}
