
var database;

var dogIMG, happyIMG;

var dog;

var foodS, foodStock;

var ft;

function preload() {

  dogIMG = loadImage("images/Dog.png");

  happyIMG = loadImage("images/happydog.png");

}

function setup() {
  createCanvas(800, 700);

  database = firebase.database()

  foodStock = database.ref("Food")

  foodStock.on("value", readValue);

  dog = new Dog(400, 350);

}


function draw() {

  background(46, 139, 87)

  dog.feed()

  drawSprites();

  textSize(20)
  fill("white")

  if (ft == undefined) {
    text("press up arrow to feed the dog", 250, 400);
  }

  text("Milk supply: " + foodS, 100, 100)

}

readValue = (data) => {

  foodS = data.val();

}


