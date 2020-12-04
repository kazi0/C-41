class Umbrella{
    constructor(x,y){
      var options={
          isStatic:true
    }
    this.body=Bodies.circle(x,y,100,options);
    World.add(world,this.body);
    //Walking Frame Img

    this.image=loadImage("Walking Frame/walking_1.png");
}
display(){
var pos=this.body.position;
imageMode(CENTER);
image(this.image,pos.x,pos.y);
}
}