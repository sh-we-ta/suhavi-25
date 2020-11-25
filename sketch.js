const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//var rect1,rect2,rect3,paper;
var ground,paperObject,dustbinObj;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;


	paperObject=new Paper(200,450,70);
	ground=new Ground(width/2,670,width,20);
	dustbinObj=new Dustbin(1150,650);

// //groundSprite=createSprite(width/2, height-35, width,10);
// 	//groundSprite.shapeColor=color("yellow")

// 	//rect1=new Dustbin(610,600,20,140);
// 	//rect2=new Dustbin(760,600,20,140);
// 	//rect3= new Dustbin(680,650,170,20);
// 	paper=new Paper(70,450,40);
// 	dustbin=new Dustbin(690,600,130,120)

// 	//creating a ground
// 	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
//  	World.add(world, ground);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);


  
  paperObject.display();
  ground.display();
  dustbinObj.display();

//   paper.display();
//  // rect1.display();
//   //rect2.display();
//   //rect3.display();
//   dustbin.display();
//   drawSprites();
 
 
 
}



function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
	}
}


