var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var requestAnimationFrame = 
					window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					window.oRequestAnimationFrame ||
					window.msRequestAnimationFrame ||
					function(callback) {
						window.setTimeout(callback, 1000/60);
					}

var playerX = 70;
var playerY = 20;

var score = 0;

function init(){
	requestAnimationFrame(update);
	keyListen();
}

function update(){
	// clearCanvas();
	context.clearRect(0,0,this.width,this.height);
	sizeCanvas();
	player();
	// collide();
	gameScore();
	gameDirections();

	this.maze = new Maze(this.context);
	this.maze.render();

	this.badge = new Badges(this.context);
	this.badge.render();

	requestAnimationFrame(update);
}

function sizeCanvas(){
	this.width = 1250;
	this.height = 575;

	this.canvas.width = this.width;
	this.canvas.height = this.height;

	$(this.canvas).css('left', 25).css('top', 25);
}


function clearCanvas(){
	var c = this.context;
	c.fillRect(-this.width/2, -this.height/2, this.width, this.height);
}

function keyListen(){

	$(window).keydown(function(event){
		var code = event.keyCode;

		if(code == 37){
			playerX -= 10;
			
		}else if(code == 39){
			playerX += 10;
			console.log(playerX);
		}else if(code == 38){
			playerY -= 10; 
		}else if(code == 40){
			playerY += 10; 
		}
	});
}

function gameScore(){
	context.fillStyle = '#333';
	context.font = 'bold 26px Arial';
	context.fillText('SCORE : ' + score, 1015,40);
}

function gameDirections(){
	context.fillStyle = '#333';
	context.font = 'bold 16px Arial';
	context.fillText('Directions' , 1015,80);
	// context.fillStyle = '#333';
	// context.font = '12px Arial';
	// // context.textAlign = 'left';
	// context.fillText('Collect all of the badges.', 1015,100);
	// context.fillText('Move the player using the' , 1015,120);
	// context.fillText('up, down, left, and right arrow keys.', 1015,140);
      var maxWidth = 200;
      var lineHeight = 22;
      var x = 1015;
      var y = 100;
      var text = 'Collect all of the badges. Move the player using the up, down, left, and right arrow keys.';

      context.font = '12px Arial';
      context.fillStyle = '#333';

      wrapText(context, text, x, y, maxWidth, lineHeight);
}

function player(){
	context.strokeStyle ='#2dbd3a ';
  context.fillStyle = '#2dbd3a ';
  context.lineWidth = 3;
  context.fillRect( playerX, playerY, 18, 18);
  context.stroke();
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ');
  var line = '';

  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    }
    else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}


// function collide(object2){
	
// }


$(function(){
	init();
});



