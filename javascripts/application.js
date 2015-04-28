var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var playerX = 0;
var playerY = 0;

// imgRabbit = new Image();
// imgRabbit.src = 'images/aqua_ball.png';
// imgRabbit.addEventListener('load', init, false);

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

	context.clearRect(0,0,this.width,this.height);
	// context.drawImage(imgRabbit,rabbitX,rabbitY,100,77)
	// context.fillRect(10,10,40,380, '#333');
	// context.fillRect(10,10,380,40, '#333');
	// context.fillRect(10,350,380,40, '#333');
	// context.fillRect(350,10,40,380, '#333');
	// context.fillRect(180,10,40,180, '#333');

		context.strokeStyle ='#2dbd3a ';
    context.fillStyle = '#2dbd3a ';
    context.lineWidth = 3;
    context.fillRect( playerX, playerY, 20, 20);
    context.stroke();

	requestAnimationFrame(update);
}

function sizeCanvas(){
	this.width = $(window).width()-50;
	this.height = $(window).height()-50;

	this.canvas.width = this.width;
	this.canvas.height = this.height;

	$(this.canvas).css('left', 25).css('top', 25);
}

function keyListen(){
	var that = this;
	$(window).keydown(function(event){
		var code = event.keyCode;

		if(code == 37){
			playerX -= 0.5;
		}else if(code == 39){
			playerX += 0.5;
		}else if(code == 38){
			playerY -= 0.5;
		}else if(code == 40){
			playerY += 0.5;
		}
	});
}
