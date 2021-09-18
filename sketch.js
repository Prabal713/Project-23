const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  playerBase = newPlayerBase(3000,random(450,height-300),180,150);
  player = newPlayer(285,playerBase.body.position.y - 153,50,180);
  computerBase = newPlayerBase(3000,random(200,height-300),250,220);
  computer = newPlayer(285,computerBase.body.position.y-140,60,150);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   playerBase.display();
   computerBase.display();

   //display Player and computerplayer
   player.display();
   ComputerPlayer.display(); 

}
