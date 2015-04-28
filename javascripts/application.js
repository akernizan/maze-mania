var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");

imgRabbit = new Image();
imgRabbit.src = 'images/wabbit.png';
imgRabbit.addEventListener('load', init, false);

var requestAnimationFrame = 
										window.requestAnimationFrame ||
										window.webkitRequestAnimationFrame ||
										window.mozRequestAnimationFrame ||
										window.oRequestAnimationFrame ||
										window.msRequestAnimationFrame ||
										function(callback) {
											window.setTimeout(callback, 1000/60);
										}
var rabbitX = 65;
var rabbitY = 65;

function init(){
	requestAnimationFrame(update);
}

function update(){

	rabbitY += 3;
	context.clearRect(0,0,400,400);
	context.drawImage(imgRabbit,rabbitX,rabbitY,100,77)
	context.fillRect(10,10,40,380, '#333');
	context.fillRect(10,10,380,40, '#333');
	context.fillRect(10,350,380,40, '#333');
	context.fillRect(350,10,40,380, '#333');
	context.fillRect(180,10,40,180, '#333');

	requestAnimationFrame(update);
}