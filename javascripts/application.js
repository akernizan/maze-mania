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

function init(){
	requestAnimationFrame(update);
}

function update(){
	// clearCanvas();
	context.clearRect(0,0,this.width,this.height);
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


function clearCanvas(){
	var c = this.context;
	c.fillRect(-this.width/2, -this.height/2, this.width, this.height);
}

function keyListen(){

	$(window).keydown(function(event){
		var code = event.keyCode;

		if(code == 37){
			playerX -= 1;
			
		}else if(code == 39){
			playerX += 1;
			console.log(playerX);
		}else if(code == 38){
			playerY -= 1; 
		}else if(code == 40){
			playerY += 1; 
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



