function Game() {
	this.badges = [];
	this.score = 0;
}

_.extend(Game, {

});

_.extend(Game.protoype, {
	initialize: function() {
		this.canvas = document.getElementById('maze-canvas');
		this.context = this.canvas.getContext('2d');

		this.maze = new Maze(this);
		this.badge = new Badges(this);
		this.player = new Player(this);

		this.keyListen();
	},
	add: function(obj){
		var collection = (obj.class == 'maze') ? this.maze : this.badge;

		collection.push(obj);
	},
	remove: function(obj){
		var collection = (obj.class == 'badge');

		var index = collection.indexOf(obj);
		if(index > -1) {collection.splice(index, 1); };
	},
	keyListen: function(){
		var game = this;

		$(window).keydown(function(event) {
			var code = event.keyCode;
			game.ship.activate(code);
		});

		$(window).keyup(function(event){
			var code = event.keyCode;
			game.ship.deactivate(code);
		});
	},
	clearCanvas: function(){
		var c = this.context;
		c.fillRect(-this.width/2, -this.height/2, this.width, this.height);
	},
	setGameInterval: function(){
		var game = this;
		var player = this.player;
		var collection = [this.badge, this.maze];
		var score = this.score

		this.runInterval = setInterval(function(){
			player.tick();
			_.each(collection, function(coll) {
				for(var i = coll.length -1; i >= 0; i--){
					coll[i].tick();
				};
			});

			_.each(game.badge, function(badge){
				if(player.collide(badge){
					score += 5;
					badge.remove();
				})
			})

		})
	}

























})//end of extend