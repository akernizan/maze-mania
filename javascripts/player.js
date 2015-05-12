function Player(context){
	this.context = context;
	this.x = 70;
	this.y = 20;

	this.class = 'player';

}

Player.prototype.moveRight = function(){
	this.x += 10;
}

Player.prototype.moveLeft = function(){
	this.x -= 10;
}

Player.prototype.moveUp = function(){
	this.y -= 10;
}

Player.prototype.moveDown = function(){
	this.y += 10;
}

Player.prototype.render = function(){
		context.strokeStyle ='#2dbd3a ';
    context.fillStyle = '#2dbd3a ';
    context.lineWidth = 3;
    context.fillRect( this.x, this.y, 18, 18);
    context.stroke();
}