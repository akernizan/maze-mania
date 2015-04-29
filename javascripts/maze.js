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

	context.fillRect(300,10,25,250);//walls
	context.fillRect(300,140, 300, 25);
	// context.fillRect(550,140,25,140);
	

	context.fillRect(200,150, 100, 25);

	//inner walls starting from right
	context.fillRect(820, 400, 25, 140);
	context.fillRect(695, 400, 125, 25);
	context.fillRect(695,200, 25, 200);
	
//left wall 
	context.fillRect(10,100, 140,25);
	context.fillRect(10,200, 120,25);
	context.fillRect(10,350, 200,25);

//inner walls starting from left
	context.fillRect(100, 350, 25,108);
	context.fillRect(100, 455, 300, 25);
	context.fillRect(300,355, 25, 100);
	context.fillRect(300, 350, 100,25);
	context.fillRect(375, 250, 25, 100);
	context.fillRect(375,250,150,25);
	context.fillRect(465, 250, 25,120);
	context.fillRect(465,350, 120, 25);



	context.fillRect(175, 250, 150, 25);

	context.stroke();
}


