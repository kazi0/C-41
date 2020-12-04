const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var umbrella;
var maxDrops=100;
var drops=[];

function preload(){
    thunder1Img=loadImage("thunderbolt/1.png")
    thunder2Img=loadImage("thunderbolt/2.png")
    thunder3Img=loadImage("thunderbolt/3.png")
    thunder4Img=loadImage("thunderbolt/4.png")
}

function setup(){
createCanvas(600,900);
engine=Engine.create();
world=engine.world;

umbrella=new Umbrella(300,640);

for(var i=0;i<maxDrops;i++){
  drops.push(new Drops(random(1,600),random(1,900)));
}

}

function draw(){
 background(0);
 Engine.update(engine);
 
 umbrella.display();
 for(var i=0;i<maxDrops;i++){
   drops[i].update();
   drops[i].display();
 }

 if (frameCount%60===0){
   console.log("hello");
  var thunder=createSprite(random(50,550),40,40,50)
  thunder.lifetime=20;
  var num=Math.round(random(1,4));
  switch(num){
    case 1:thunder.addImage(thunder1Img)
    break;
    case 2:thunder.addImage(thunder2Img)
    break;
    case 3:thunder.addImage(thunder3Img)
    break;
    case 4:thunder.addImage(thunder4Img)
    break;
  }
}

drawSprites();   
}


