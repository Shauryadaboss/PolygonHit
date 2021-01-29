class Polygon{
    constructor(x, y, width, height){
        var options = {
            restitution:0.04,
            friction:1,
            density:1,
            isStatic: false
            
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("polygon.png")
        World.add(world, this.body);
    }
    display(){
    push();
        translate(this.body.position.x, this.body.position.y);
        this.image.scale = 0.;
        //image(this.image, 0, 0);
        imageMode(CENTER);
        fill("red");
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}