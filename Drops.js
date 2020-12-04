class Drops{
    constructor(x,y){
        this.body=Bodies.circle(x,y,3);
        World.add(world,this.body);
        Matter.Body.setVelocity(this.body,{x:0,y:2})
    }
    update(){
    if(this.body.position.y>400 && this.body.position.x>150 && this.body.position.x<420||
        this.body.position.y>900){
            Matter.Body.setPosition(this.body,{x:random(1,600),y:0});
            Matter.Body.setVelocity(this.body,{x:0,y:7})
        }
    }
    display(){
        var pos=this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,3,5);
    }
}