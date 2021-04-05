var canvas;
var music;
var greenb;
var redb;
var orangeb;
var blueb;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    greenb = createSprite(710,580,190,20)
    greenb.shapeColor = ("green")
    //create box sprite and give velocity
   
    redb = createSprite(505,580,200,20)
    redb.shapeColor = ("red")

    orangeb = createSprite(295,580,200,20)
    orangeb.shapeColor = ("orange")

    blueb = createSprite(85,580,200,20)
    blueb.shapeColor = ("blue")

    box = createSprite(random(20,750),550,20,20)
    box.shapeColor = ("white")
    box.velocityX = 7
    box.velocityY = 7
 
music.play()


}

function draw() {
    background(rgb(169,169,169));
   
 
  edges = createEdgeSprites();
  box.bounceOff(edges);
  
    if(box.isTouching(greenb) && box.bounceOff(greenb)){
       box.shapeColor = "green"
       music.play();
      
   }
   if(box.isTouching(redb) && box.bounceOff(redb)){
    box.shapeColor = "red"
    music.play()
    box.shapeColor = "white"
    box.velocityX = 0
    box.velocityY = 0
    music.stop()

}
if(box.isTouching(orangeb) && box.bounceOff(orangeb)){
    box.shapeColor = "orange"
    music.play()
}
if(box.isTouching(blueb) && box.bounceOff(blueb)){
    box.shapeColor = "blue"
    music.play()
}




drawSprites()
    //add condition to check if box touching surface and make it box
}
 