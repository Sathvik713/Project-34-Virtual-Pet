//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;


function preload()
{
  //load images here
  dog.loadimage("images/dogImg1");
  dog.loadimage("images/happyDog");
}

function setup() {
	createCanvas(500, 500);
  
  var dogSprite;
  dogSprite.loadimage("images/dogImg1");

  foodStock=database.ref('Food');
    foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  
  if(keyWentDown(UP_ARROW)) {
    writeStock(foodS);
    dog.addImage(happydog);
  }

  drawSprites();

  //add styles here


}

function readStock(data) {
  foodS=database.val();
}

function writeStock(x) {

  if(x<=0) {
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}