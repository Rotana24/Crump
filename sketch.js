const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var ground, groundSprite;
var box1, box2, box3;
var paper,paper1,box, paperImage,boxImage;

function preload()
{
	paperImage = loadImage("paper.png");
	boxImage = loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);

	groundSprite=createSprite(width/2, height-50, width,40);
	groundSprite.shapeColor=color("yellow");
	
	engine = Engine.create();
	world = engine.world;
	
	box1 = new Box(900,610,250,20);
	box2 = new Box(785,448,20,300);
	box3 = new Box(1015,448,20,300);

	var ball_options={
		restitution: 1.0
	}

	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 40 , {isStatic:true});
	World.add(world, ground);
	paper = Bodies.circle(200,500,20,ball_options);
	World.add(world,paper);
	box = createSprite(900,455,50,50);
	box.addImage(boxImage);
	Engine.run(engine);

}


function draw() {
	background(0);
	Engine.update(engine);
	
	rectMode(CENTER);
	ellipseMode(RADIUS);
	imageMode(CENTER);
	image(paperImage,paper.position.x,paper.position.y,50,50);
	keyPressed();
	drawSprites();
 
}

function keyPressed(){
	if (keyDown (UP_ARROW)){
		Matter.Body.applyForce(paper,paper.position,{x:0,y:-0.01});
	}
	if (keyDown (RIGHT_ARROW)){
		Matter.Body.applyForce(paper,paper.position,{x:0.01,y:0});
	}
}