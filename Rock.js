class Rock extends Sprite {
   constructor() {
    super(width * Math.random(), 50 , "red")
     this.SPEED = 2
    this.vx = -this.SPEED
    this.vy = -this.SPEED
  }
  attack(z) {
   if (checkCC(this.x, this.y, this.width, z.x, z.y, z.width, 20)) {
     z.die()
   } 
  }
}