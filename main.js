var player;
var walls;
var endzones;

var enemies;
var enemies_level_1;
var enemies_level_2;
var enemies_level_3;
var enemies_level_4;
var enemies_level_5;

var coins;
var coins_level_1;
var coins_level_2;
var coins_level_3;
var coins_level_4;
var coins_level_5;
var coins_level_6;
var coins_level_7;

var countdown;

var collected_coins;

var background;

var current_level;

var lives;

var countdown_bool;

var time;
var time_tenth;
var time_hundredth;

var counter;

var game_won;

var player_opacity;

var theta = 0;

var coin_sound_effect;
var death_sound_effect;
var beat_level_sound_effect;

function add_time () {
  if (!game_won) {
    time += 1;
  }
}

function add_time_tenth () {
  if (!game_won) {
    time_tenth += 1;
  }
}

function add_time_hundredth () {
  if (!game_won) {
    time_hundredth += 1;
  }
}

function reset_time_tenth () {
  if (!game_won) {
    time_tenth = 0;
  }
}

function reset_time_hundredth () {
  if (!game_won) {
    time_hundredth = 0;
  }
}

function do_time () {
  text("Time: " + Math.floor(time/60) + ":" + Math.floor((time%60)/10) + time%60%10 + "." + time_tenth % 10 + time_hundredth % 10,290,20);
}

function do_opacity () {
  player_opacity += 255/60;
}

function draw () {
  fill(255);
  rect(0,0,500,500);

  image(background,0,0,480,360);

  if (register[82]) {
    restart_entire_game();
  }

  if (current_level == 8) {
    game_won = true;
  }

  noStroke();

  if (!game_won) {
		draw_background();
    do_player();
    do_coins();
    do_enemy();
    draw_text();
    do_time();
    do_tutorial();
    countdown_func();
  } else {
    draw_game_win();
  }
}

function countdown_func () {
  if (countdown_bool) {
    countdown -= 1;
    do_opacity();
    
  }

  if (countdown == 0) {
    countdown_bool = false;
  }
}

function do_enemy () {
  ellipseMode(CORNER);
  //Level 1
  if (current_level == 1) {
    for (var each_enemy of enemies_level_1) {
      fill(255,0,0);
      ellipse(each_enemy.x,each_enemy.y,each_enemy.w,each_enemy.h);

      each_enemy.y += each_enemy.vl;
      for (var each_wall of walls) {
        if (collision(each_enemy, each_wall)) {
          each_enemy.vl *= -1;
        }
      }
    }
  //Level 2
  } else if (current_level == 2) {
    for (var each_enemy of enemies_level_2) {
      fill(255,0,0);
      ellipse(each_enemy.x,each_enemy.y,each_enemy.w,each_enemy.h);

      each_enemy.x += each_enemy.vl;
      for (var each_endzone of endzones) {
        if (collision(each_enemy, each_endzone)) {
          each_enemy.vl *= -1;
        }
      }
    }
  //Level 3
  } else if (current_level == 3) {
    for (var each_enemy of enemies_level_3) {
      fill(255,0,0);
      ellipse(each_enemy.x,each_enemy.y,each_enemy.w,each_enemy.h);

      each_enemy.x += each_enemy.x_vl;
      each_enemy.y += each_enemy.y_vl;

      if (each_enemy.x < 66 && each_enemy.y < 106) {
        move_obj(each_enemy,397,230,100);
      }
      if (each_enemy.x > 384 && each_enemy.y > 229) {
        move_obj(each_enemy,55,105,100);
      }
      if (each_enemy.x > 384 && each_enemy.y < 106) {
        move_obj(each_enemy,55,230,100);
      }
      if (each_enemy.x < 66 && each_enemy.y > 229) {
        move_obj(each_enemy,397,105,100);
      }
		}
  //Level 4
  } else if (current_level == 4) {
    for (var each_enemy of enemies_level_4) {
      fill(255,0,0);
      ellipse(each_enemy.x,each_enemy.y,each_enemy.w,each_enemy.h);

      if (each_enemy.or == "vert") {
        each_enemy.y += each_enemy.vl;
      } else if (each_enemy.or == "hor") {
        each_enemy.x += each_enemy.vl;
      }

      if (each_enemy.x > 385 && each_enemy.y == 105) {
        each_enemy.or = "vert";
        each_enemy.x = 385;
      }
      if (each_enemy.x == 385 && each_enemy.y > 225) {
        each_enemy.or = "hor";
        each_enemy.y = 225;
        each_enemy.vl *= -1;
      }
      if (each_enemy.x < 65 && each_enemy.y == 225) {
        each_enemy.or = "vert";
        each_enemy.x = 65;
      }
      if (each_enemy.x == 65 && each_enemy.y < 105) {
        each_enemy.or = "hor";
        each_enemy.y = 105;
        each_enemy.vl *= -1;
      }
    }
  //Level 5
  } else if (current_level == 5) {
    for (var each_enemy of enemies_level_5) {
      fill(255,0,0);
      ellipse(each_enemy.x,each_enemy.y,each_enemy.w,each_enemy.h);

      each_enemy.y += each_enemy.vl;
      for (var each_wall of walls) {
        if (collision(each_enemy, each_wall)) {
          each_enemy.vl *= -1;
        }
      }
    }
  //Level 6
  } else if (current_level == 6) {
    for (var each_enemy of enemies_level_6) {
      fill(255,0,0);
      ellipse(each_enemy.x,each_enemy.y,each_enemy.w,each_enemy.h);

      if (each_enemy.vl == 3) {
        if (each_enemy.x == 220) {
          each_enemy.vl *= -1;
        }
        if (each_enemy.x > 395) {
          each_enemy.vl *= -1;
        }
      } else if (each_enemy.vl == -3) {
        if (each_enemy.x == 230) {
          each_enemy.vl *= -1;
        }
        if (each_enemy.x == 55) {
          each_enemy.vl *= -1;
        }
      }
      
      each_enemy.x += each_enemy.vl;
    }
  //Level 7
  } else if (current_level == 7) {
    for (var each_enemy of enemies_level_7) {
      fill(255,0,0);
      ellipse(each_enemy.x,each_enemy.y,each_enemy.w,each_enemy.h);

      var adjust = 77;

      var index_thing = enemies_level_7.indexOf(each_enemy);

      if (index_thing < 4) {
        each_enemy.x = 140 + 32 * -cos(theta + adjust * enemies_level_7.indexOf(each_enemy));
        each_enemy.y = 167 + 32 * sin(theta + adjust * enemies_level_7.indexOf(each_enemy));
      } else if (index_thing > 3 && index_thing < 8) {
        each_enemy.x = 140 + 64 * -cos(theta + adjust * enemies_level_7.indexOf(each_enemy));
        each_enemy.y = 167 + 64 * sin(theta + adjust * enemies_level_7.indexOf(each_enemy));
      } else if (index_thing > 8 && index_thing < 13) {
        each_enemy.x = 330 + 32 * cos(theta + adjust * (enemies_level_7.indexOf(each_enemy)-5));
        each_enemy.y = 167 + 32 * sin(theta + adjust * (enemies_level_7.indexOf(each_enemy)-5));
      } else if (index_thing > 12 && index_thing < 17) {
        each_enemy.x = 330 + 64 * cos(theta + adjust * (enemies_level_7.indexOf(each_enemy)-5));
        each_enemy.y = 167 + 64 * sin(theta + adjust * (enemies_level_7.indexOf(each_enemy)-5));
      }
      theta += 0.0025;
    }
  }
}

function do_player () {
  noStroke();
  fill(0,0,255,player_opacity);
  rect(player.x,player.y,player.w,player.h);

  //movement
  if (!countdown_bool){
    if (register[37] || register[65]) {
      player.x -=3;
    }
    if (register[38] || register[87]) {
      player.y -=3;
    }
    if (register[39] || register[68]) {
      player.x +=3;
    }
    if (register[40] || register[83]) {
      player.y +=3;
    }
  }

  //boundaries
  if (player.y < 100) {
    player.y += 3;
  }
  if (player.y > 260-player.h) {
    player.y -= 3;
  }
  if (player.x < 0) {
    player.x += 3;
  }
  if (player.x > 480-player.w) {
    player.x -= 3;
  }

  //restart game
  for (var i in enemies) {
    for (var each_enemy of enemies[i]) {
      if (current_level == parseInt(i)+1) {
        if (enemy_collision(player,each_enemy)) {
          restart_game();
					death_sound_effect.play();
          countdown = 60;
          countdown_bool = true;
          player_opacity = 0;
        }
      }
    }
  }

  //next level
  for (var each_coin_set of coins) {
    if (in_endzone(player) && collected_coins == each_coin_set.length && coins.indexOf(each_coin_set)+1 == current_level) {
      current_level += 1;
			beat_level_sound_effect.play();
      player = {x:5,y:140,w:30,h:30};
      collected_coins = 0;
      player_opacity = 0;
      countdown = 60;
      countdown_bool = true;
    }
  }
}

function do_tutorial () {
  strokeWeight(2);
  stroke(0);
  fill(255);

  counter += 1;

  if (counter < 361) {
    triangle(player.x + 35, player.y + 15, player.x + 60, player.y + 5, player.x + 60, player.y + 25);

    rect(player.x + 60, player.y - 7.5, 100,45,10,10);

  }

  noStroke();
  fill(0)

  if (counter > 0 && counter < 121) {
    text("USE W,A,S,D",player.x + 65, player.y + 10.5);
    text("TO MOVE", player.x + 65, player.y + 27.5);
  } else if (counter > 120 && counter < 241) {
    text("COLLECT THE",player.x + 65, player.y + 10.5);
    text("YELLOW DOTS", player.x + 65, player.y + 27.5); 
  } else if (counter > 240 && counter < 361) {
    text("AVOID THE",player.x + 65, player.y + 10.5);
    text("RED SQUARES", player.x + 65, player.y + 27.5);
  }
}

function do_coins () {
  ellipseMode(CORNER);
		for (var i = 0; i < 7; i++) {
			if (current_level == i+1) {
				for (each_coin of coins[i]) {
					if (!each_coin.collected) {
						fill(255,255,0);
						ellipse(each_coin.x, each_coin.y, each_coin.w, each_coin.h);
					}

					if (collision(each_coin, player)) {
						each_coin.collected = true;
						coin_sound_effect.play();
						collected_coins += 1;
						each_coin.y += 500;
					}
				}
			}
		}
}

function restart_game () {
  player = {x:5,y:140,w:30,h:30};
  lives += 1;
}

function restart_entire_game () {

}

function in_endzone (object) {
  if (object.x > 431) {
    return true;
  } else {
    return false;
  }
}

function draw_text () {
  fill(255);
  text("Deaths: " + lives,10,20);

  text("Level: " + current_level,80,20);

  text("Collected Coins: " + collected_coins + "/" + coins[current_level-1].length,160,20);
}

function draw_game_win () {
  fill(0);
  rect(0,0,480,360);

  textAlign(CENTER,CENTER);

  fill(255);
  textSize(40);
  text("You are the Champion!", 240, 50);

  textSize(20);
  text("Your time: " + Math.floor(time/60) + ":" + Math.floor((time%60)/10) + time%60%10 + "." + time_tenth % 10 + time_hundredth % 10, 240, 120);

  text("You died: " + lives + " times", 240, 170);
}

function move_obj (obj,new_x,new_y,time) {
    obj.x_vl = (new_x - obj.x)/time;
    obj.y_vl = (new_y - obj.y)/time;
};