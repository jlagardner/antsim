function Ant() {
  this.heading = random(2 * PI)
  this.position = createVector(random(width), random(height));
  this.velocity = createVector(0, 0)
  this.img = loadImage('assets/ant.png');
  this.pheremone = [this.position.copy()]
  this.pheremone_trail_length = 60
  this.pheremone_time_period = 20

  this.show = function() {
    translate(this.position.x, this.position.y)
    rotate(this.heading + PI / 2)
    // ellipse(0,0,30,30)
    // text(this.heading,0,0)
    image(this.img, 0, 0, 20, 20);
    rotate(-this.heading - PI / 2)
    translate(-this.position.x, -this.position.y)
    // push()
    for (j = 0; j < this.pheremone.length; j++) {
      translate(this.pheremone[j].x,this.pheremone[j].y)
      fill(0,150,0,150)
      ellipse(0,0,(j+this.pheremone_trail_length-this.pheremone.length)/5,(j+this.pheremone_trail_length-this.pheremone.length)/5)
      translate(-this.pheremone[j].x,-this.pheremone[j].y)
    }
    // pop()

    // print(this.pheremone.length)
    // for (i = 0; i< this.pheremone.length; i++ ) {
    //   translate(this.pheremone[i].x,this.pheremone[i].y)
    //   fill(0,150,0)
    //   ellipse(0,0,20-i,20-i)
    //   translate(-this.pheremone[i].x,-this.pheremone[i].y)
    // }
  }

  this.move = function(dt) {
    if (this.heading % (2 * PI) < PI && this.position.y > height) {
      // this.heading *= -1
      this.heading = 3 * PI / 2
    } else if (this.heading % (2 * PI) > PI && this.position.y < 0) {
      // this.heading *= -1
      this.heading = PI / 2
    }
    if (this.heading % (2 * PI) > PI / 2 && this.heading % (2 * PI) < 3 * PI / 2 && this.position.x < 0) {
      this.heading = 0
    } else if ((this.heading % (2 * PI) < PI / 2 || this.heading % (2 * PI) > 3 * PI / 2) && this.position.x > width) {
      this.heading = PI
    }
    this.velocity = p5.Vector.fromAngle(this.heading)
    distance = p5.Vector.mult(this.velocity, dt);
    this.position.add(distance)
    if (0 == frameCount % this.pheremone_time_period) {
      this.pheremone.push(this.position.copy())
    }
    if (this.pheremone.length > this.pheremone_trail_length) {
      this.pheremone.shift()
    }
  }
}
