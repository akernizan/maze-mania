function Player(context){

}

Player.prototype.moveRight = function(){
	playerX += 5;
}

Player.prototype.moveLeft = function(){
	playerX -= 5;
}

Player.prototype.moveUp = function(){
	playerY -= 5;
}

Player.prototype.moveDown = function(){
	playerY += 5;
}

Player.prototype.render = function(){
		context.strokeStyle ='#2dbd3a ';
    context.fillStyle = '#2dbd3a ';
    context.lineWidth = 3;
    context.fillRect( 70, 20, 20, 20);
    context.stroke();
}