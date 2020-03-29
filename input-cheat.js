var register = {};

function keyPressed () {
    register[keyCode] = true;
    if(keyCode === 80) {
      if (pause) {
        pause = false;
      } else if (!pause) {
        pause = true;
        fill (30,30,30);
        rect(width/2 - 100, height/2 - 50, 200,100);
        fill(0, 255, 0);
        textSize(32);
        text("PAUSED", 250, 250)
      }
    }
}

function keyReleased () {
    register[keyCode] = false;
}