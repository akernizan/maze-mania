function Maze(context){
	this.width = $(window).width();
	this.height = $(window).height();
}

Maze.prototype.render = function(){
	context.strokeStyle = '#333';
	context.fillStyle = '#333';
	context.lineWidth = 2;

	context.fillRect(10,10,25,550);
	context.fillRect(10,10,1000,25);
	context.fillRect(20,535,990,25);
	context.fillRect(985, 20, 25, 450);

	context.fillRect(200,10,25,140);//walls
	context.fillRect(200,140, 140, 25);
	context.fillRect(340,140, 25,140);

	context.fillRect(700, 350, 25, 200);
	// context.fillRect(200, )
	// context.fillRect(10,10,380,40);
	// context.fillRect(10,350,380,40);
	// context.fillRect(180,10,40,180);
	context.stroke();
}


