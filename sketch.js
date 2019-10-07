let player
let rocks = []
let sprites = []
function setup() {
  createCanvas(600, 600);
  player = new Player()
  sprites.push(player)
  for (var i = 0; i < 6; i++) {
    
    rock = new Rock(i*80+80, 60);
    rocks[i] = rock
    sprites.push(rock)
  }
}


function draw() {
  background(220);text(frameCount, 0, 10);
  sprites.filter(sprite => sprite.active).forEach(sprite => {
  sprite.update()
    sprite.draw()
  })
  if (!player.active) {
      text("Game Over!" , width/2, height/2)
    noLoop()
      }
  checkCollisions()
}

function checkCollisions() {
  for (let i = 0; i < rocks.length; i++) {
    let rock = rocks[i];
    
  if (rock.active && checkCC(rock.x, rock.y, rock.width, player.x, player.y, player.width) ) {
    
    
    player.health -= 100
    if (player.health <= 0) {
      
        player.die()
      
    }
    
}
  }
}

function keyPressed() {
  player.keyPressed()
}

function keyReleased() {
  player.stop()
} 

function checkCC(x, y, d, x2, y2, d2, b = 0) {
 if (dist(x, y, x2, y2) <= (d/2)+(d2/2) + b){
   return true;
}
  return false;
}
