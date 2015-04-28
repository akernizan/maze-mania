function Maze(context){
	this.width = $(window).width();
	this.height = $(window).height();
}

Maze.prototype.render = function(){
	context.strokeStyle = '#333';
	context.fillStyle = '#333';
	context.lineWidth = 1;

	context.fillRect(10,10,25,550);
	context.fillRect(10,10,1000,25);
	context.fillRect(20,535,990,25);
	context.fillRect(985, 20, 25, 450);

	context.fillRect(300,10,25,280);//walls
	context.fillRect(300,140, 140, 25);
	

	context.fillRect(200,150, 100, 25);

	context.fillRect(700, 400, 25, 140);
	context.fillRect(200, 425, 25, 125);
	context.fillRect(200, 400, 125,25);

	context.fillRect(10,100, 140,25);
	context.fillRect(10,200, 120,25);
	context.fillRect(10,400, 120,25);
	context.fillRect(175, 280, 150, 25);

	context.stroke();
}


