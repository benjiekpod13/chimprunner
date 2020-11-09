
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score=0
var ground
var survivalTime=0

function preload(){
  foodGroup=new Group();
  obstacleGroup=new Group();
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600)  
monkey= createSprite(50,200)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.2
  
  ground=createSprite(0,400,800,20)
  ground.velocityX=-1
  ground.x=ground.width/2
  
  
}


function draw() {
background("lightBlue")
  score=score+Math.round(frameCount/100)
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score,50,50);
  
  survivalTime=survivalTime+Math.round(frameCount/frameRate())
  stroke("black");
  textSize(20);
  fill("black");
  text("SurvivalTime: "+ survivalTime,300,50);
  
  
  if(ground.x<10){
     ground.x=ground.width/2;
     
     }
     
  
  
  if(keyDown("space") && monkey.y>300){
    monkey.velocityY= -16; 
  } 
  monkey.velocityY=monkey.velocityY+0.99;
  monkey.collide(ground);
  
  food()
  SpawnObstacle()
  drawSprites()
}


function food(){
  if (frameCount%80===0){
      banana= createSprite(600,80,10,10)
      banana.velocityX=-4
    banana.y=Math.round(random(120,200));
    banana.addImage(bananaImage)
    banana.scale=0.1
    foodGroup.add(banana)
    foodGroup.setLifetimeEach(100)
  }
  
  
  
}

function SpawnObstacle(){
  if (frameCount%300===0){
      obstacle= createSprite(600,ground.y-40)
      obstacle.addImage(obstacleImage)
      obstacle.velocityX=-4
      obstacle.scale=0.2
      obstacleGroup.add(obstacle)
      obstacleGroup.setLifetimeEach(200)
  }
  
  
  
  
  
  
}

