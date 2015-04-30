function Badges(context){
	this.context = context;
	this.centerX = 350;
	this.centerY = 400;
	this.radius = 10;
}

Badges.prototype.render = function(){
	
	context.strokeStyle = "#E915CC";
	context.fillStyle = "#E915CC";
	context.lineWidth = 1;
	context.fillRect(50, 500, 20,20 );

	context.strokeStyle = "#4F9077";
	context.fillStyle = "#4F9077";
	context.lineWidth = 1;
	context.fillRect(500, 50, 20,20 );

	context.beginPath();
	context.arc(800 ,  50, this.radius, 0,2* Math.PI, false);
	context.fillStyle = '#2679F8';
	context.fill();
	context.lineWidth = 2;
	context.strokeStyle = '#2679F8';
	context.stroke();

	context.beginPath();
	context.arc(this.centerX, this.centerY, this.radius, 0,2* Math.PI, false);
	context.fillStyle = '#E06746';
	context.fill();
	context.lineWidth = 2;
	context.strokeStyle = '#E06746';
	context.stroke();


}