class Rock extends Sprite {
   constructor() {
    super(width * Math.random(), 50 , "gray")
     this.SPEED = 2
    this.vx = -this.SPEED
    this.vy = -this.SPEED
  }
  update() {
    if (this.x <= this.width/2 || this.x >= width- 25) {
        this.vx = -this.vx
    }
    if (this.y <= this.width/2 || this.y >= height- 25) {
        this.vy = -this.vy
    }
    this.vx *= 1 + frameCount/1000000
    this.vy *= 1 + frameCount/1000000
    
    
    this.x += this.vx
    this.y += this.vy
    
  }
  attack(z) {
   if (checkCC(this.x, this.y, this.width, z.x, z.y, z.width, 20)) {
     z.die()
   } 
  
  }
   checkCollision(other) {
    if (Math.sqrt( Math.pow(other.x - this.x,2) + Math.pow(other.y - this.y,2) ) < this.width/2 + other.width/2) {
      this.vx *= -1;
      this.vy *= -1;
      other.vx *= -1;
      other.vy *= -1;
      this.update()
      other.update()
    }
  }
  collide(vx, vy) {
    this.vx = vx
    this.vy = vy
    this.move()
  }
}