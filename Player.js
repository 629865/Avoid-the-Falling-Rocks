class Player extends Sprite {
  constructor() {
   super(30, height / 2, "black")
    this.score = 0
    this.hp = 0
    this.health = 100
  }
keyPressed() {
    if (keyCode === UP_ARROW) {
      this.move(0, -7)
    }
    else if (keyCode === DOWN_ARROW) {
      this.move(0, 7)
    }
    else if (keyCode === LEFT_ARROW) {
      this.move(-7, 0)
    }
    else if (keyCode === RIGHT_ARROW) {
      this.move(7, 0)
    }
    }
}