function Maze(context){
	this.width = $(window).width();
	this.height = $(window).height();
	this.x = 0;
	this.y = 0;

	this.class = 'maze';
}

Maze.prototype.render = function(){
	context.strokeStyle = '#333';
	context.fillStyle = '#333';
	context.lineWidth = 1;
	var t = 25;
	//border
	context.fillRect(10,10,t,550);
	context.fillRect(110,10,900,t);
	context.fillRect(20,535,990,t);
	context.fillRect(985, 20, t, 450);

	//walls
	context.fillRect(300,10,t,250);
	context.fillRect(300,140, 300, t);
	context.fillRect(200,150, 100, t);
	
	
	// walls coming from top border
	context.fillRect(400,10,t,85);
	context.fillRect(580,10,t,85);


	//inner walls starting from right
	context.fillRect(850, 150, t, 140);
	context.fillRect(730, 150, 175, t);
	context.fillRect(800, 265, 50,t)
	context.fillRect(730,10, t, 150);

	// right walls
	context.fillRect(900,75,100,t);
	context.fillRect(800,400,200,t);
	context.fillRect(850,400,t,90);
	context.fillRect(900,350,t,50);
	context.fillRect(585,400,t,90);
	context.fillRect(675,490,t,50);


	//middle walls
	context.fillRect(475,400,t,140);
	context.fillRect(500,400,200,t);
	context.fillRect(550,300,t,100);
	context.fillRect(575,300,100,t);
	context.fillRect(650,200,t,100);
	
	//left wall 
	context.fillRect(10,90, 170,t);
	context.fillRect(10,200, 120,t);
	
	//inner walls starting from left
	context.fillRect(100, 350, t,108);
	context.fillRect(100, 455, 300, t);
	context.fillRect(300,355, t, 100);
	context.fillRect(300, 350, 100,t);
	context.fillRect(375, 250, t, 100);
	context.fillRect(375,250,150,t);
	context.fillRect(500, 150, t,120);

	context.fillRect(175, 250, 150, t);
	
	context.stroke();
}


