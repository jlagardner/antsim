let colony
let terrain
let dt

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER)
  terrain = new Terrain()
  colony = new Colony(40, createVector(random(terrain.width / 2), random(terrain.height / 2)), createVector(terrain.width, terrain.height))
  colony.terrain = terrain
  dt = 0.5
  for (i = 0; i < 3; i++) {
    terrain.food.push(new FoodSource(createVector(random(terrain.width * 0.6, terrain.width * 0.8), random(terrain.height * 0.6, terrain.height * 0.8))))
  }
}

function draw() {
  background(255)
  translate(10, 10)
  push()
  noFill()
  strokeWeight(2)
  rect(0, 0, terrain.width, terrain.height)
  pop()
  colony.advance_time_step(dt)
  colony.show()
  fill(0, 255, 0, 150)
  for (i = 0; i < terrain.food.length; i++) {
    food = terrain.food[i]
    ellipse(food.position.x, food.position.y, 30, 30)
  }
  push()
  noFill()
  strokeWeight(24)
  stroke(255)
  buffer = 13
  rect(-buffer, -buffer, terrain.width + 2 * buffer, terrain.height + 2 * buffer)
  pop()
  fill(0)
  text("Number of ants: " + colony.population.length, 0, terrain.height + 20)
}
