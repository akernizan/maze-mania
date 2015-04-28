var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var playerX = 0;
var playerY = 0;
var requestAnimationFrame = 
						window.requestAnimationFrame ||
						window.webkitRequestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						window.oRequestAnimationFrame ||
						window.msRequestAnimationFrame ||
						function(callback) {
							window.setTimeout(callback, 1000/60);
						}


function init(){
	requestAnimationFrame(update);
}

function update(){
	keyListen();
	sizeCanvas();
	// setCartisian();
	this.maze = new Maze(this.context);
	this.maze.render();

	this.player = new Player(this.context);
	// this.player.render();
	
	requestAnimationFrame(update);
}

function sizeCanvas(){
	this.width = $(window).width()-50;
	this.height = $(window).height()-50;

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
			playerX -= 2;
		}else if(code == 39){
			playerX += 2;
		}else if(code == 38){
			playerY -= 2; 
		}else if(code == 40){
			playerY += 2; 
		}
	});
}


$(function(){
	init();
});
