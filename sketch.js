let colony
let terrain
let dt


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  terrain = new Terrain()
  colony = new Colony(10, createVector(100, 200), createVector(terrain.width, terrain.height))
  dt = 0.5

}

function draw() {
  background(255)
	translate(10,10)
  push()
  noFill()
  strokeWeight(2)
  rect(0, 0, terrain.width, terrain.height)
  pop()
  colony.advance_time_step(dt)
  colony.show()
	push()
  noFill()
  strokeWeight(10)
	stroke(255)
	buffer = 6
  rect(-buffer, -buffer, terrain.width+2*buffer, terrain.height+2*buffer)
  pop()
}
