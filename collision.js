function collision (obj1, obj2) {
    if (obj1.x < obj2.x + obj2.w &&
        obj1.x + obj1.w > obj2.x &&
        obj1.y < obj2.y + obj2.h &&
        obj1.y + obj1.h > obj2.y) {
        return true;
    } else {
        return false;
    }
}

function enemy_collision (obj1, obj2) {
  var circleDistanceX = Math.abs(obj2.x - obj1.x);
  var circleDistanceY = Math.abs(obj2.y - obj1.y);

  if (circleDistanceX > (obj1.w/2 + obj2.w/2)) { return false; }
  if (circleDistanceY > (obj1.h/2 + obj2.w/2)) { return false; }

  if (circleDistanceX <= (obj1.w/2)) { return true; } 
  if (circleDistanceY <= (obj1.h/2)) { return true; }

  cornerDistance_sq = (circleDistanceX - rect.w/2)^2 + (circleDistanceY - rect.h/2)^2;

  return (cornerDistance_sq <= ((circle.w/2)^2));
}