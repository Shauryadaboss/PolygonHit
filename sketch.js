const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world, slingshot;
var box1, ground, polygon, longGround;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(800, 250, 70, 70);
    box2 = new Box(880, 250, 70, 70);
    box3 = new Box(960, 250, 70, 70);
    box4 = new Box(840, 180, 70, 70);
    box5 = new Box(920, 180, 70, 70);
    box6 = new Box(880, 110, 70, 70);

    ground = new Ground(880, 290, 260, 20);
    longGround = new Ground(600, 390, 1200, 20);

    polygon = new Polygon(100, 100, 50, 50);
    
    slingshot = new SlingShot(polygon.body,{x:200, y:50});
    }

function draw(){
    background(0);
    Engine.update(engine); 
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    ground.display();
    fill("pink");
    longGround.display();

    polygon.display();

    slingshot.display();
    }

    function mouseDragged(){
        //if (gameState!=="launched"){
            Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
        //}
    }
    
    
    function mouseReleased(){
        slingshot.fly();
        gameState = "launched";
    }
    
    function keyPressed(){
        if(keyCode === 32){
            bird.trajectory = [];
            Matter.Body.setPosition(polygon.body, {x : 200, y : 50});
           slingshot.attach(polygon.body);
        }
    }
