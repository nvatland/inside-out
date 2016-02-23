window.onload = function(){
	var canvas = document.getElementById('particles');
	var ctx = canvas.getContext("2d");

	var W = window.innerWidth,
		H = window.innerHeight;
		canvas.width = W;
		canvas.height = H;

	var particles = [];

	var particle_count = 6;
	var colors = [
		{r:126,g:188,b:66},
		{r:141,g:89,b:164},
		{r:249,g:219,b:30},
		{r:62,g:100,b:175},
		{r:218,g:34,b:38}
	]

	for (var i = 0; i < particle_count; i++) {
		particles.push(new particle());
	};

	function particle() {
		this.speed = {
			x:-2.5+Math.random()*10,
			y:-15+Math.random()*20
		};

		this.radius = 100+Math.random()*50;

		this.location = {x: Math.random()*W, y: Math.random()*H};

		this.life = 30+Math.random()*100;

		this.remaining_life = this.life;

		// this.r = Math.round(Math.random()*255);
		// this.g = Math.round(Math.random()*255);
		// this.b = Math.round(Math.random()*255);
		this.color = colors[Math.floor(Math.random() * colors.length)]
	}

	function draw() {
		ctx.globalCompositeOperation = 'source-over';
		ctx.fillStyle = "#efefef";
		// ctx.globalAlpha=0.1;
		ctx.fillRect(0,0,W,H);
		ctx.globalCompositeOperation = 'multiply';


		for (var i = 0; i < particles.length; i++) {
			var p = particles[i];
			ctx.beginPath();
			p.opacity = Math.round(p.remaining_life/p.life*100)/100;

			var gradient = ctx.createRadialGradient(p.location.x, p.location.y, 0, p.location.x, p.location.y, p.radius);
			gradient.addColorStop(0, "rgba("+p.color.r+", "+p.color.g+", "+p.color.b+", "+p.opacity+")");
			// gradient.addColorStop(0.5, "rgba("+p.r+", "+p.g+", "+p.b+", "+p.opacity+")");
			gradient.addColorStop(1, "rgba("+p.color.r+", "+p.color.g+", "+p.color.b+", "+p.opacity+")");
			ctx.fillStyle = gradient;
			ctx.arc(p.location.x, p.location.y, p.radius, Math.PI*2, false);
			ctx.fill();

			p.remaining_life--;
			p.radius--;
			p.location.x += p.speed.x;
			p.location.y += p.speed.y;

			if (p.remaining_life<0 || p.radius < 0) {
				particles[i] = new particle();
			};
		};
	}
	setInterval(draw,33);
}