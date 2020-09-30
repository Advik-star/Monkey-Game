var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;
var survivaltime=0;
var ground;

function preload(){  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   
}

//creating banana sprite
function food() {
  var banana = createSprite(400,Math.round(random(120, 200)), 10, 5);
  banana.addImage(bananaImage);
  banana.velocityX = -3;
  banana.lifetime = 150;
  banana.scale = 0.1;
  foodGroup.add(banana);
}

//creating obstacle sprite
function boulder() {
  var obstacle = createSprite(400, 325, 10, 5);
  obstacle.addImage(obstacleImage);
  obstacle.velocityX = -3;
  obstacle.lifetime = 150;
  obstacle.scale = 0.15;
  obstacleGroup.add(obstacle);
}


function setup(){    
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4
  ground.x = ground.width/2;
  console.log(ground.x);
  
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
}


function draw() {
  background("orange");
     
  if (ground.x < 0.0){
      ground.x = ground.width/2;
  }
  
  if(keyDown("space") && monkey.y >= 300)  {
    monkey.velocityY = -12;
    //monkey.velocityY = monkey.velocityY + 0.8
    
  }
  
  if(monkey.y <= 200){
    monkey.velocityY = monkey.velocityY + 0.8
    
  }
  
  var select_banana = Math.round(random(1,4));  
  if (World.frameCount % 80 == 0) {
    food(); 
  } 
      
   var select_obstacle = Math.round(random(1,4));  
  if (World.frameCount % 300 == 0) {
     boulder();
  } 
  
  monkey.collide(ground);
  
  drawSprites();  
  
  stroke("orange");
  textSize(20);
  fill("orange");
  text("Score: " + score, 130, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivaltime, 100, 50);
}