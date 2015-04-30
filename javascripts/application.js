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
	keyListen();
}

function update(){
	// clearCanvas();
	context.clearRect(0,0,this.width,this.height);
	sizeCanvas();
	player();


	this.maze = new Maze(this.context);
	this.maze.render();

	this.badge = new Badges(this.context);
	this.badge.render();

	requestAnimationFrame(update);
}

function sizeCanvas(){
	this.width = 1200;
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

function player(){
	context.strokeStyle ='#2dbd3a ';
  context.fillStyle = '#2dbd3a ';
  context.lineWidth = 3;
  context.fillRect( playerX, playerY, 18, 18);
  context.stroke();
}

function collide(object1, object2){
	
}


$(function(){
	init();
});



