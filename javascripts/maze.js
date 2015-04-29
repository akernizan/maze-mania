function Maze(context){
	this.width = $(window).width();
	this.height = $(window).height();
}

Maze.prototype.render = function(){
	context.strokeStyle = '#333';
	context.fillStyle = '#333';
	context.lineWidth = 1;

	//border
	context.fillRect(10,10,25,550);
	context.fillRect(110,10,900,25);
	context.fillRect(20,535,990,25);
	context.fillRect(985, 20, 25, 450);

	//walls
	context.fillRect(300,10,25,250);
	context.fillRect(300,140, 300, 25);
	context.fillRect(200,150, 100, 25);
	
	
	// walls coming from top border
	context.fillRect(400,10,25,85);
	context.fillRect(580,10,25,85);


	//inner walls starting from right
	context.fillRect(850, 150, 25, 140);
	context.fillRect(730, 150, 175, 25);
	context.fillRect(800, 265, 50,25)
	context.fillRect(730,10, 25, 150);

	// right walls
	context.fillRect(900,75,100,25);
	context.fillRect(800,400,200,25);
	context.fillRect(850,400,25,90);
	context.fillRect(900,350,25,50);
	context.fillRect(585,400,25,90);
	context.fillRect(675,490,25,50);


	//middle walls
	context.fillRect(475,400,25,140);
	context.fillRect(500,400,200,25);
	context.fillRect(550,300,25,100);
	context.fillRect(575,300,100,25);
	context.fillRect(650,200,25,100);
	
	//left wall 
	context.fillRect(10,100, 140,25);
	context.fillRect(10,200, 120,25);
	
	//inner walls starting from left
	context.fillRect(100, 350, 25,108);
	context.fillRect(100, 455, 300, 25);
	context.fillRect(300,355, 25, 100);
	context.fillRect(300, 350, 100,25);
	context.fillRect(375, 250, 25, 100);
	context.fillRect(375,250,150,25);
	context.fillRect(500, 150, 25,120);

	context.fillRect(175, 250, 150, 25);
	



	

	context.stroke();
}


