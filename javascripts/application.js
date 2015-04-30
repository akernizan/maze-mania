var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

var requestAnimationFrame = 
						window.requestAnimationFrame ||
						window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						window.oRequestAnimationFrame ||
						window.msRequestAnimationFrame ||
						function(callback) {
							window.setTimeout(callback, 100/60);
						}
var playerX = 70;
var playerY = 20;

function init(){
	requestAnimationFrame(update);
}

function update(){
	
	sizeCanvas();
	player();
	keyListen();

	this.maze = new Maze(this.context);
	this.maze.render();

	requestAnimationFrame(update);
}

function sizeCanvas(){
	this.width = 1025;
	this.height = 575;

	this.canvas.width = this.width;
	this.canvas.height = this.height;

	$(this.canvas).css('left', 25).css('top', 25);
}

function setCartisian(){
	 this.context.translate(this.width / 2, this.height / 2);
  this.context.scale(1, -1);
}

function clearCanvas(){
	var c = this.context;
	c.fillRect(-this.width/2, -this.height/2, this.width, this.height);
}

function keyListen(){

	$(window).keydown(function(event){
		var code = event.keyCode;
		// var thisPlayer = new Player(this.context);

		if(code == 37){
			playerX -= 0.1;
		}else if(code == 39){
			playerX += 0.1;
		}else if(code == 38){
			playerY -= 0.1; 
		}else if(code == 40){
			playerY += 0.1; 
		}
	});
}

function player(){
	context.strokeStyle ='#2dbd3a ';
  context.fillStyle = '#2dbd3a ';
  context.lineWidth = 3;
  context.fillRect( playerX, playerY, 20, 20);
  context.stroke();
}

$(function(){
	init();
});



