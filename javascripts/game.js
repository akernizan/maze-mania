function Game() {
	this.sizeCanvas();
	this.setCanvas();
	this.keyListen();
	// this.player();

	gameScore();
	gameDirections();

	this.maze = new Maze(this.context);
	this.maze.render();

	this.badge = new Badges(this.context);
	this.badge.render();
}

Game.prototype.sizeCanvas = function() {
	this.width = 1220;
	this.height = 575;

	this.canvas.width = this.width;
	this.canvas.height = this.height;

	$(this.canvas).css('left', 25).css('top', 25);
};

Game.prototype.setCanvas = function(){
    this.canvas = document.getElementById('maze-canvas');
    this.context = this.canvas.getContext('2d');
}

Game.prototype.keyListen = function() {
	var that = this;

	$(window).keydown(function(event){
		var code = event.keyCode;
		var thisPlayer = that.player;
		
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