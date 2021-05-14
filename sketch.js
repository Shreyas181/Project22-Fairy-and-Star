var starImage,backgroundImage;
var star,starBody;
//create variable for fairy sprite and fairyImage
var fairy,fairyImage,fairyStandingImg,fairyVoice;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImage = loadImage("star.png");
	backgroundImage = loadImage("starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	fairyStandingImg = loadImage("fairy.png");
	fairyVoice = loadSound("JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVoice.play();

	//create fairy sprite and add animation for fairy
    fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImage);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650,30,5, {restitution:0.5, isStatic:true});
	World.add(world,starBody);
	
	Engine.run(engine);

}


function draw() {
  background(backgroundImage);

  star.x = starBody.position.x; 
  star.y = starBody.position.y;

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470 ){
	Matter.Body.setStatic(starBody,true);
	fairy.changeAnimation("fairyflying",fairyStandingImg);
   }

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 20;
     }
 
	 if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 20;
      }

}
