function Colony(population_size, mound_pos, extent) {
  this.population = []
  this.pheremone_trail = []
  this.extent = extent
  this.entrance_co_ords = mound_pos
  for (let j = 0; j < population_size; j++) {
    this.population.push(new Ant(this.entrance_co_ords))
  }

  this.show = function() {
    for (let j = 0; j < this.population.length; j++) {
      this.population[j].show()
    }
    for (let j = this.pheremone_trail.length - 1; j >= 0; j--) {
      pos = this.pheremone_trail[j][0]
      time_ago = frameCount - this.pheremone_trail[j][1]
      radius = max(2, 10 - time_ago / 50)
      push()
      fill(191, 66, 244, 150)
      ellipse(pos.x, pos.y, radius, radius)
      pop()
      if (time_ago > 1500) {
        this.pheremone_trail.splice(j, 1)
      }
    }
  }

  this.advance_time_step = function(dt) {
    for (let j = this.population.length - 1; j >= 0; j--) {
      ant = this.population[j]
      choice = random(1)
      if (choice > 0.98) {
        this.pheremone_trail.push([ant.position.copy(), frameCount])
        ant.energy -= 5
      } else if (choice > 0.03) {
        ant.move(dt)
        ant.energy -= 1
      } else {
        ant.change_direction(1)
      }
      if (ant.position.x > this.extent.x) {
        ant.position.x = 0;
      } else if (ant.position.x < 0) {
        ant.position.x = this.extent.x
      }
      if (ant.position.y > this.extent.y) {
        ant.position.y = 0;
      } else if (ant.position.y < 0) {
        ant.position.y = this.extent.y
      }
    }
  }

  this.add_ant = function() {
    this.population.push(new Ant(this.entrance_co_ords))
  }
}
