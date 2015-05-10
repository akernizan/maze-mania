var canvas = document.getElementById('maze-canvas');
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

function Game() {
	// this.setCanvas();
	// this.sizeCanvas();
	// this.keyListen();
	// this.player();

	// gameScore();
	// gameDirections();

	this.maze = new Maze(this.context);
	this.maze.render();

	this.player = new Player(this.context);
	this.player.render();

	this.badge = new Badges(this.context);
	this.badge.render();

	 this.score = 0;

	 this.setGameInterval();
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
			// playerX -= 10;
			thisPlayer.moveLeft();
			
		}else if(code == 39){
			// playerX += 10;
			thisPlayer.moveRight();

			console.log(playerX);
		}else if(code == 38){
			// playerY -= 10; 
			thisPlayer.moveUp();
		}else if(code == 40){
			// playerY += 10; 
			thisPlayer.moveDown();
		}
		that.render();
		that.collide();
	});
}

Game.prototype.render = function() {
	this.context.clearRect(0, 0, this.width, this.height);
	this.maze.render();
	this.player.render();
	this.badge.render();
}

Game.prototype.setGameInterval = function(){
	var game = this;
	var player = this.player;

	this.runInterval = setInterval(function(){
		player.render();
	},30)
}

Game.prototype.collide = function(otherObj) {
	    if (this.xPos < otherObj.xPos + otherObj.width &&
       this.xPos + this.width > otherObj.xPos &&
       this.yPos < otherObj.yPos + otherObj.height &&
       this.height + this.yPos > otherObj.yPos) {
        return true
    } else { return false }
  
}

 Game.prototype.wrapText = function(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ');
  var line = '';

  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    }
    else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}

 Game.prototype.gameDirections = function(){
	context.fillStyle = '#333';
	context.font = 'bold 16px Arial';
	context.fillText('Directions' , 1015,80);

  var maxWidth = 200;
  var lineHeight = 22;
  var x = 1015;
  var y = 100;
  var text = 'Collect all of the badges by moving the player using the up, down, left, and right arrow keys.';

  context.font = '12px Arial';
  context.fillStyle = '#333';

  wrapText(context, text, x, y, maxWidth, lineHeight);
}

Game.prototype.gameScore = function() {
	context.fillStyle = '#333';
	context.font = 'bold 26px Arial';
	context.fillText('SCORE : ' + score, 1015,40);
}

$(function(){
	Game();
});

