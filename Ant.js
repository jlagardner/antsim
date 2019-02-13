function Ant(intial_position) {
  this.heading = random(2 * PI)
  this.position = intial_position.copy()
  this.velocity = p5.Vector.fromAngle(this.heading)
  this.img = loadImage('assets/ant.png');
  this.energy = 10
  this.carrying_food = false
  this.time_of_last_pheremone_detection = 0

  this.show = function() {
    strokeWeight(1)
    translate(this.position.x, this.position.y)
    rotate(this.heading + PI / 2)
    image(this.img, 0, 0, 20, 20);
    if (this.carrying_food) {
      fill(0,255,0,150)
      ellipse(0,-10,5,5)
    }
    rotate(-this.heading - PI / 2)
    translate(-this.position.x, -this.position.y)
  }

  this.move = function(dt) {
    this.velocity = p5.Vector.fromAngle(this.heading)
    distance = p5.Vector.mult(this.velocity, dt);
    this.position.add(distance)
  }

  this.change_direction = function(range) {
    this.heading += random (-range,range)
  }
}
