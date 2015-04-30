function Badges(context){
	this.context = context;
	this.centerX = 350;
	this.centerY = 400;
	this.radius = 7;
}

Badges.prototype.render = function(){
	// var circleCoords = [
	// 	[500, 50, this.radius, 0,2* Math.PI, false],
	// 	[50, 500, this.radius, 0,2* Math.PI, false],
	// 	[800 ,  50, this.radius, 0,2* Math.PI, false],
	// 	[this.centerX, this.centerY, this.radius, 0,2* Math.PI, false],
	// 	[450, 200, this.radius, 0,2* Math.PI, false],
	// 	[950, 370, this.radius, 0,2* Math.PI, false],
	// 	[750, 470, this.radius, 0,2* Math.PI, false],
	// ];

	// var circleColors = ["#4F9077","#E915CC",'#2679F8','#E06746','#6FEBEF','#EEA54F','#D5A7FC'];

	// $(circleColors).each(function(i,color){
	// 	context.strokeStyle = color[0];
	// 	context.fillStyle = color[0];
	// });

	// $(circleCoords).each(function(i, coord){
	// 	context.arc(coord[0],coord[1],coord[2],coord[3],coord[4],coord[5]);
	// })

	// context.fill();
	// context.stroke();

	
	// circles
	context.beginPath();
	context.arc(500, 50, this.radius, 0,2* Math.PI, false);
	context.fillStyle = "#4F9077";
	context.fill();
	context.lineWidth = 2;
	context.strokeStyle = "#4F9077";
	context.stroke();

	context.beginPath();
	context.arc(50, 500, this.radius, 0,2* Math.PI, false);
	context.fillStyle = "#E915CC";
	context.fill();
	context.lineWidth = 2;
	context.strokeStyle = "#E915CC";
	context.stroke();

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

	context.beginPath();
	context.arc(450, 200, this.radius, 0,2* Math.PI, false);
	context.fillStyle = '#6FEBEF';
	context.fill();
	context.lineWidth = 2;
	context.strokeStyle = '#6FEBEF';
	context.stroke();

	context.beginPath();
	context.arc(950, 370, this.radius, 0,2* Math.PI, false);
	context.fillStyle = '#EEA54F';
	context.fill();
	context.lineWidth = 2;
	context.strokeStyle = '#EEA54F';
	context.stroke();

	context.beginPath();
	context.arc(750, 470, this.radius, 0,2* Math.PI, false);
	context.fillStyle = '#D5A7FC';
	context.fill();
	context.lineWidth = 2;
	context.strokeStyle = '#D5A7FC';
	context.stroke();

}