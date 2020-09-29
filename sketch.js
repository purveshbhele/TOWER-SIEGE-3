const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg;


 function preload() {

    getBackgroundImg();
 } 

function setup(){
    var canvas = createCanvas(700,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    ground2 = new Ground(400,300,240,10)
b1= new Box(320,299,30,30);
b2= new Box(360,299,30,30);
b3= new Box(400,299,30,30);
b4= new Box(440,299,30,30);
b5= new Box(480,299,30,30);
b6= new Box(340,239,30,30);
b7= new Box(380,239,30,30);
b8= new Box(420,239,30,30);
b9= new Box(460,239,30,30);
b10= new Box(360,200,30,30);
b11= new Box(400,200,30,30);
b12= new Box(440,200,30,30);
b13= new Box(380,150,30,30);
b14= new Box(420,150,30,30);
b15= new Box(400,100,30,30);

    bird = new Bird(20,10);

slingshot=new SlingShot(bird.body,{x:100,y:200});
}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

   
    Engine.update(engine);
    
    
    ground.display();
    ground2.display();
    
b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
b10.display();
b11.display();
b12.display();
b13.display();
b14.display();
b15.display();
    bird.display();

   
    slingshot.display();
}
function mouseDragged() {
Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY})

}
function mouseReleased(){
slingshot.fly();

}
function keyPressed(){
    if(keyCode===32){
slingshot.attach(bird.body);
Matter.Body.setPosition(bird.body,{x:100,y:200});

    }
}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = "sprites/bg1.png";
    }
    else{
        bg = "sprites/bg2.jpg";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}