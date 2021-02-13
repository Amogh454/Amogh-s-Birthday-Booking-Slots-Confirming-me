var bg;
var bookNow, bookimg;
var promise, promiseImage;
var me, myImage;
var text1, text1Image;
var heartText, heartTextImage;
var notice, noticeIMG;
var note, noteImg;


function preload(){
  bg=loadImage("bg.jpg");
  bookimg=loadImage("booking.png");
  promiseImage = loadImage("Promise.png");
  myImage = loadImage("Me.png");
  text1Image = loadImage("BookSlotsText.png")
  heartTextImage = loadImage("HeartText.png");
  noticeIMG = loadImage("NoticeText.png");
  noteImg = loadImage("Notice.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  input = createInput();
  input.position(width/2.7, height/4);
  input.size(300, 30)

  button = createButton('submit');
  button.position(width/1.7, height/4);
  button.mousePressed(greet);
  button.size(100, 35)

  greeting = createElement('h2', 'what is your name?, Write whom you are to me');
  greeting.position(width/3, height/8 );

  textAlign(CENTER);
  textSize(50);
  
  bookNow=createSprite(width/2, height/2)
  bookNow.addImage(bookimg)
  bookNow.scale = 0.7;

  me = createSprite(width/5, height/1.4);
  me.addImage(myImage);
   
  promise = createSprite(width/2, height/1.4);
  promise.addImage(promiseImage);
  promise.scale = 2;
  promise.visible = false;


  text1 = createSprite(width/2, height/1.4);
  text1.addImage(text1Image);
  //text1.visible = false;

  heartText = createSprite(width/6, height/8);
  heartText.addImage(heartTextImage);
  heartText.scale = 0.7;
  heartText.visible = false;

  notice = createSprite(width/1.2, height/3);
  notice.addImage(noticeIMG);
  notice.scale = 0.7;
  notice.visible = false;

  note = createSprite(width/6.2, height/2.5);
  note.addImage(noteImg);
  note.scale = 0.7
  note.visible = false;


}

function draw() {
  background(bg);
  
  if(mousePressedOver(bookNow)){
    bookNow.scale = 0.3
	promise.visible = true;
	me.visible = false;
	text1.visible = false;
	heartText.visible = true;
	notice.visible = true;
	note.visible = true;
  }
  drawSprites()

   


}

function mouseReleased(){
	bookNow.scale = 0.7;
	//me.visible = false;
	//text1.visible = false;



}
function greet() {
	const name = input.value();
	greeting.html('I Welcome You To My birthday Celebration ' + name + '!');
	input.value('');
  
	for (let i = 0; i < 200; i++) {
	  push();
	  fill(random(255), 255, 255);
	  translate(random(width), random(height));
	  rotate(random(2 * PI));
	  text(name, 0, 0);
	  pop();
	}
  }

  