var bg,bgImg;
var player, shooterImg, shooter_shooting;
//Declare variable for zombie & for zombie Image
var zombie,zombieImg;
var students=["Akshit","Ashwin","Sister"];

//Declare varible for 3 hearts
var heart1,heart1Img;
var heart2,heart2Img;
var heart3,heart3Img;

//Declare variable for zombie group
var zombiesGroup;




function preload()
{
  shooterImg = loadImage("assets/shooter_2.png");
  shooter_shooting = loadImage("assets/shooter_3.png");
  bgImg = loadImage("assets/bg.jpeg");

  //Load heart Image
  heart1Img=loadImage("assets/heart_1.png");
  heart2Img=loadImage("assets/heart_2.png");
  heart3Img=loadImage("assets/heart_3.png");

  

  //load zombie img
  zombieImg=loadImage("assets/zombie.png");


  

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
bg.addImage(bgImg);
bg.scale = 1.1;
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.3;
   player.debug = false;
   player.setCollider("rectangle",0,0,300,300);


   //creating sprites to depict lives remaining
   heart1=createSprite(displayWidth-100,displayHeight-650,50,50);
   heart1.addImage(heart1Img);
   heart1.scale=0.3;
   heart1.visible=false;
   heart2=createSprite(displayWidth-170,displayHeight-650,50,50);
   heart2.addImage(heart2Img);
   heart2.scale=0.3;
   heart2.visible=false;
   heart3=createSprite(displayWidth-100,displayHeight-650,50,50);
   heart3.addImage(heart3Img);
   heart3.scale=0.3;
    //creating group for zombies    
    zombiesGroup=new Group();
    
}

function draw() 
{
  background(0); 
  if(keyDown("UP_ARROW")||touches.length>0)
  {
    player.y = player.y-30;
  }
  if(keyDown("DOWN_ARROW")||touches.length>0)
  {
    player.y = player.y+30;
  }

  if(keyWentDown("space"))
  {
    player.addImage(shooter_shooting);
  }
  else if(keyWentUp("space"))
  {
    player.addImage(shooterImg);
  }

//destroy zombie when player touches it
if(zombiesGroup.isTouching(player))
{
 for(var i=0;i<zombiesGroup.length;i++)
 {
   if(zombiesGroup[i].isTouching(player))
   {
     zombiesGroup[i].destroy();
   }
 }
}

//calling the function to spawn zombies

spawnZombies();
drawSprites();
}



//creating function to spawn zombies
function spawnZombies()
{
  if(frameCount%80===0){
    zombie=createSprite(random(500,1000),random(10,600),50,50);
    zombie.addImage(zombieImg);
    zombie.velocityX=-3;
    zombie.scale=0.15;
    zombie.lifetime=800;
    zombiesGroup.add(zombie);
    zombie.debug=false;
    zombie.setCollider("rectangle",0,0,400,800);
  }
}