class ComputerPlayer{
    constructor(x,y,width,hieght){
        var options = {
            isStatic : true
        };

        this.body = Bodies.rectangle(x,y,eidth,length,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assests/base2.png");

        World.add(world,this.body);
    }
}

display()
 {
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTRE);
    image(this.image,0,0,this.width,this.height);

    pop();

}