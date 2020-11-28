class Tree{
    constructor(x,y,width,height){

        var options ={
            isStatic: true
        }

        this.body = Bodies.rectangle(x,y,400,400,options);
        this.height = 400;
        this.width = 400;
        this.image = loadImage("tree.png");

        World.add(world,this.body);
    }
    display(){
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,400,400);
    }

}