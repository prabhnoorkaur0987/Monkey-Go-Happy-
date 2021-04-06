var monkey , monkey_running,monkeyCollide,ground,bananas
var banana ,bananaImage,obstacle, obstacleImage
var FoodGroup, obstacleGroup,bananaGroup;
var score=0
var gameState=PLAY
var PLAY=1
var END=0
var spawnbananas
var rand
var spawnobstacles
var score=0
var survivalTime=0
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 monkeyCollide=loadImage("sprite_1.png")
}



function setup() {
  createCanvas(600,500)
  PLAY=1
  END=0
  gameState=PLAY
   bananaGroup=new Group();
  obstacleGroup=new Group();
  monkey=createSprite(50,350,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.addAnimation("collide",monkeyCollide)
  monkey.scale=0.2

  ground=createSprite(0,410,600,10)
  ground.velocityX=-5
  ground.x=ground.width/2
  
 
    
  
  
 
  
 
  
  
}


function draw() {
background("lightgreen")
 stroke("white")
  textSize(20)
  fill("white")
  

  
  text("survivalTime: "+ survivalTime,100,50)
    if(gameState===PLAY){
      spawnobstacles()
      spawnbananas()
      survivalTime=Math.ceil(frameCount/frameRate())
      
      
      
      
      if(keyDown("space")){
    monkey.velocityY=-15   
    
  
  }
      
    if(monkey.isTouching(bananaGroup)){
    bananaGroup.destroyEach()
    score=score+1
  }
      monkey.velocityY=monkey.velocityY+0.8
      
      if(monkey.isTouching(obstacleGroup)){
        
     gameState=END
        
        
      }
    }
  
  
    
  if(gameState===END){
    
    
    
    textSize(24)
    fill("red")
    stroke("yellow")
    text("Oops GameOver",200,200)
    monkey.changeAnimation("collide",monkeyCollide)
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
    ground.velocityX=0 
    monkey.velocityY=0
    monkey.velocityX=0
    
  
    
  }
    
 
       
    
    
  monkey.collide(ground);
     
    
if(ground.x>0){
  ground.x=ground.width/2
}
  drawSprites();
  stroke("white")
  textSize(20)
  fill("white")
   text("score:"+score,350,50)
  
}
function spawnobstacles(){
  if(frameCount%300===0){
       
     
     obstacle=createSprite(670,349                     ,10,10)
  obstacle.velocityX=-7
     obstacle.addImage (obstacleImage);
    obstacleGroup.add(obstacle)
    obstacle.scale=0.3 
    obstacle.lifetime=220
  }
  
    
}

function spawnbananas(){
     if(frameCount%80===0){



  banana=createSprite(620,120,10,10)
  banana.y=Math.round(random(150,230))  
  banana.velocityX=-7
  banana.addImage(bananaImage)
  bananaGroup.add(banana)
  banana.scale=0.14
  banana.lifetime=100
}
}








