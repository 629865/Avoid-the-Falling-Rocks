class Sprite {
  constructor(x, y, c) {
    this.x = x
    this.y = y
    this.vx = 0;
    this.vy = 0;
    this.width = 50
    this.length = 50
    this.color = c
    this.SPEED = 1
    this.active = true
  }
  draw() {
    fill(this.color)
    ellipse(this.x, this.y, this.width, this.height)
  }
  die() {
   this.active = false 
  }
  move(dx, dy) {
    this.vx = dx * this.SPEED
    this.vy = dy * this.SPEED
  }
  update() {
    if (this.x <= this.width/2 || this.x >= width- 25) {
        this.vx = -this.vx
    }
    if (this.y <= this.width/2 || this.y >= height- 25) {
        this.vy = -this.vy
    }
    this.x += this.vx
    this.y += this.vy
    
  }
  stop() {
    this.vx = 0
    this.vy = 0
  }
}