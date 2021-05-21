//Create variables here
var background,bg;
var human,h;
var alien,a;
var coin,c;
var road,r;
var gameState = "PLAY";
var bg;
var score;
function preload()
{
	//load images here
  a = loadImage("alien.png")
  h = loadImage("human.png")
  c = loadImage("coin.png")
  bg = loadImage("bgg.jpg")

}

function setup() {
	createCanvas(400, 400);
   human = createSprite(10,210,20,20);
    human.addImage(h)
    human.scale= 0.3
  
  coinGroup = createGroup();
  alienGroup = createGroup();
 score = 0;
}


function draw() {  
background(bg)

  //add styles here
  if (gameState === "PLAY"){
    human.visible = true;
    human.x = mouseX
  spawnAliens();
    spawnCoins();
  }
  
  if(human.isTouching(coinGroup)){
     score = score + 1
    coinGroup.destroyEach();
     }
  
  if(human.isTouching(alienGroup)){
    gameState = "END"
    
    
  }
  drawSprites();
  if(gameState === "END"){
      human.velocityX = 0;
      coinGroup.destroyEach();
      alienGroup.destroyEach();
     human.visible = false;
    fill("red")
  textSize(24)
      text("GAME OVER",110,120)
    text(   " PRESS 'R' TO RESTART",60,180)
    if(keyDown('r')){
       reset();
       }
    }
  fill("green")
  textSize(20)
  text("Score : "+score,140,50)
}

function spawnAliens(){
   if (frameCount%100===0){
      alien = createSprite(0,400,20,20)
      alien.addImage(a)
      alien.scale=0.1
      alien.velocityY = -4
      
      alien.x = Math.round(random(20,380))
    alienGroup.add(alien);
    }
}

function spawnCoins(){
   if (frameCount%56===0){
      coin = createSprite(0,400,20,20)
     coin.addImage(c)
      coin.scale=0.1
      coin.velocityY = -4
      
      coin.x = Math.round(random(20,380))
     coinGroup.add(coin)
   
    }
  }
  
function reset(){
  if(keyDown('r') && gameState === "END"){
    gameState = "PLAY"
     
     }
}
