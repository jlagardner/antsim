let colony;
let img
let size

function setup() {
	createCanvas(400, 400);
	imageMode(CENTER);
	a = new Ant()
	colony = []
	size
	for (i = 0; i < 20; i ++) {
		colony[i] = new Ant()
	}
}

function draw() {
	background(255);
	for (i = 0; i < 20; i++) {
	colony[i].show()
	colony[i].heading += random(-0.05,0.05)
	colony[i].move(0.5)
}
}
