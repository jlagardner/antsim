function Ant() {
  this.heading = random(2*PI)
  this.position = createVector(random(width), random(height));
  this.velocity = createVector(0, 0)
  this.img = loadImage('assets/ant.png');
  this.pheremone = []

  this.show = function() {
    translate(this.position.x, this.position.y)
    rotate(this.heading + PI / 2)
    // ellipse(0,0,30,30)
    // text(this.heading,0,0)
    image(this.img, 0, 0, 20, 20);
    rotate(-this.heading - PI / 2)
    translate(-this.position.x, -this.position.y)
    // for (i = 0; i< this.pheremone.length; i++ ) {
    //   translate(this.pheremone[i].x,this.pheremone[i].y)
    //   fill(0,150,0)
    //   ellipse(0,0,20-i,20-i)
    //   translate(-this.pheremone[i].x,-this.pheremone[i].y)
    //
    // }
  }

  this.move = function(dt) {
    if (this.heading % (2 * PI) < PI && this.position.y > height) {
      // this.heading *= -1
      this.heading = 3*PI/2
    } else if (this.heading % (2 * PI) > PI && this.position.y < 0) {
      // this.heading *= -1
      this.heading = PI/2
    }
    if (this.heading % (2 * PI) > PI / 2 && this.heading % (2 * PI) < 3 * PI / 2 && this.position.x < 0) {
      this.heading = 0
    } else if ((this.heading % (2 * PI) < PI / 2 || this.heading % (2 * PI) > 3 * PI / 2 )&& this.position.x > width) {
      this.heading = PI
    }
    this.velocity = p5.Vector.fromAngle(this.heading)
    distance = p5.Vector.mult(this.velocity, dt);
    this.position.add(distance)
    this.pheremone.push(this.position)
    if (this.pheremone > 20) {
      this.pheremone.shift()
    }
  }
}
