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

function test () {
  console.log(countdown);
}

function setup () {
  createCanvas(480,360);

  background = loadImage("background.png");
  lives = 0;
  current_level = 1;

  collected_coins = 0;
  countdown = 60;
  countdown_bool = false;

  counter = 0;

  game_won = false;

  player_opacity = 0;

	coin_sound_effect = loadSound("coin-sound-effect.mp3");
	death_sound_effect = loadSound("death-sound-effect5.mp3");
	death_sound_effect.setVolume(1);

  player = {x:5,y:140,w:30,h:30};

  enemies_level_1 = [{x: 184, y: 105, w: 30, h: 30, vl: 3},
                     {x: 269, y: 105, w: 30, h: 30, vl: 3},
                     {x: 354, y: 105, w: 30, h: 30, vl: 3}];
  
  enemies_level_2 = [{x: 55, y: 105, w: 30, h: 30, vl: 3},
                     {x: 395, y: 145, w: 30, h: 30, vl: 3},
                     {x: 55, y: 185, w: 30, h: 30, vl: 3},
                     {x: 395, y: 230, w: 30, h: 30, vl: 3}];
  
  enemies_level_3 = [{x: 55, y: 105, w: 30, h: 30, x_vl: 0, y_vl: 0},
                     {x: 397, y: 230, w: 30, h: 30, x_vl: 0, y_vl: 0},
                     {x: 55, y: 230, w: 30, h: 30, x_vl: 0, y_vl: 0},
                     {x: 397, y: 105, w: 30, h: 30, x_vl: 0, y_vl: 0}];

  enemies_level_4 = [
                     {x: 97, y: 105, w: 30, h: 30, vl: 3, or: "hor"},
                     {x: 140, y: 105, w: 30, h: 30, vl: 3, or: "hor"},
                     {x: 185, y: 105, w: 30, h: 30, vl: 3, or: "hor"},

                     {x: 312, y: 105, w: 30, h: 30, vl: 3, or: "hor"},
                     {x: 354, y: 105, w: 30, h: 30, vl: 3, or: "hor"},
                     {x: 397, y: 105, w: 30, h: 30, vl: 3, or: "hor"},

                     {x: 395, y: 147, w: 30, h: 30, vl: 3, or: "vert"},
                     {x: 395, y: 189, w: 30, h: 30, vl: 3, or: "vert"},
                     {x: 395, y: 230, w: 30, h: 30, vl: 3, or: "vert"},

                     {x: 355, y: 230, w: 30, h: 30, vl: -3, or: "hor"},
                     {x: 310, y: 230, w: 30, h: 30, vl: -3, or: "hor"},
                     {x: 268, y: 230, w: 30, h: 30, vl: -3, or: "hor"},
                     {x: 225, y: 230, w: 30, h: 30, vl: -3, or: "hor"},
                     {x: 183, y: 230, w: 30, h: 30, vl: -3, or: "hor"},
                     {x: 140, y: 230, w: 30, h: 30, vl: -3, or: "hor"},
                     {x: 98, y: 230, w: 30, h: 30, vl: -3, or: "hor"},
                     {x: 55, y: 230, w: 30, h: 30, vl: -3, or: "vert"},
                     
                     {x: 55, y: 188, w: 30, h: 30, vl: -3, or: "vert"},
                     {x: 55, y: 146, w: 30, h: 30, vl: -3, or: "vert"},
                     {x: 55, y: 105, w: 30, h: 30, vl: 3, or: "hor"},
  ];

  enemies_level_5 = [
                     {x: 98, y: 105, w: 30, h: 30, vl: 3},
                     {x: 140, y: 235, w: 30, h: 30, vl: 3},
                     {x: 183, y: 105, w: 30, h: 30, vl: 3},
                     {x: 225, y: 235, w: 30, h: 30, vl: 3},
                     {x: 268, y: 105, w: 30, h: 30, vl: 3},
                     {x: 311, y: 235, w: 30, h: 30, vl: 3},
                     {x: 353, y: 105, w: 30, h: 30, vl: 3},
  ];
  enemies_level_6 = [
                     {x: 55, y: 105, w: 30, h: 30, vl: 3},
                     {x: 220, y: 146, w: 30, h: 30, vl: -3},
                     {x: 55, y: 188, w: 30, h: 30, vl: 3},
                     {x: 220, y: 230, w: 30, h: 30, vl: -3},

                     {x: 230, y: 105, w: 30, h: 30, vl: 3},
                     {x: 395, y: 146, w: 30, h: 30, vl: -3},
                     {x: 230, y: 188, w: 30, h: 30, vl: 3},
                     {x: 395, y: 230, w: 30, h: 30, vl: -3},
  ];

  enemies_level_7 = [
                     {x: 98, y: 167, w: 30, h: 30},
                     {x: 183, y: 167, w: 30, h: 30},
                     {x: 140, y: 209, w: 30, h: 30},
                     {x: 140, y: 125, w: 30, h: 30},
                     {x: 98, y: 167, w: 30, h: 30},
                     {x: 183, y: 167, w: 30, h: 30},
                     {x: 140, y: 209, w: 30, h: 30},
                     {x: 140, y: 125, w: 30, h: 30},
                     {x: 140, y: 167, w: 30, h: 30},

                     {x: 98, y: 167, w: 30, h: 30},
                     {x: 183, y: 167, w: 30, h: 30},
                     {x: 140, y: 209, w: 30, h: 30},
                     {x: 140, y: 125, w: 30, h: 30},
                     {x: 98, y: 167, w: 30, h: 30},
                     {x: 183, y: 167, w: 30, h: 30},
                     {x: 140, y: 209, w: 30, h: 30},
                     {x: 140, y: 125, w: 30, h: 30},
                     {x: 330, y: 167, w: 30, h: 30},
  ];

  enemies = [enemies_level_1, enemies_level_2, enemies_level_3,enemies_level_4,enemies_level_5,enemies_level_6,enemies_level_7];

  coins_level_1 = [{x: 156, y: 201, w: 15, h: 15, collected: false},
                  {x: 240, y: 161, w: 15, h: 15, collected: false},
                  {x: 326, y: 201, w: 15, h: 15, collected: false},
                  {x: 410, y: 161, w: 15, h: 15, collected: false}];

  coins_level_2 = [{x: 285, y: 120, w: 15, h: 15, collected: false},
                   {x: 200, y: 160, w: 15, h: 15, collected: false},
                   {x: 285, y: 200, w: 15, h: 15, collected: false},
                   {x: 200, y: 245, w: 15, h: 15, collected: false}];
  
  coins_level_5 = [{x: 112, y: 182, w: 15, h: 15, collected: false},
                   {x: 155, y: 182, w: 15, h: 15, collected: false},
                   {x: 200, y: 182, w: 15, h: 15, collected: false},
                   {x: 240, y: 182, w: 15, h: 15, collected: false},
                   {x: 280, y: 182, w: 15, h: 15, collected: false},
                   {x: 323, y: 182, w: 15, h: 15, collected: false},
                   {x: 368, y: 182, w: 15, h: 15, collected: false}];

  coins_level_4 = [  {x: 117, y: 125, w: 15, h: 15, collected: false},
                     {x: 160, y: 125, w: 15, h: 15, collected: false},
                     {x: 205, y: 125, w: 15, h: 15, collected: false},

                     {x: 327, y: 125, w: 15, h: 15, collected: false},
                     {x: 368, y: 125, w: 15, h: 15, collected: false},
                     {x: 415, y: 125, w: 15, h: 15, collected: false},

                     {x: 415, y: 167, w: 15, h: 15, collected: false},
                     {x: 415, y: 209, w: 15, h: 15, collected: false},
                     {x: 415, y: 250, w: 15, h: 15, collected: false},

                     {x: 375, y: 250, w: 15, h: 15, collected: false},
                     {x: 330, y: 250, w: 15, h: 15, collected: false},
                     {x: 288, y: 250, w: 15, h: 15, collected: false},
                     {x: 245, y: 250, w: 15, h: 15, collected: false},
                     {x: 203, y: 250, w: 15, h: 15, collected: false},
                     {x: 160, y: 250, w: 15, h: 15, collected: false},
                     {x: 118, y: 250, w: 15, h: 15, collected: false},
                     {x: 75, y: 250, w: 15, h: 15, collected: false},
                     
                     {x: 75, y: 208, w: 15, h: 15, vl: -3, or: "vert"},
                     {x: 75, y: 166, w: 15, h: 15, vl: -3, or: "vert"},
                     {x: 75, y: 125, w: 15, h: 15, vl: 3, or: "hor"}];

  coins_level_6 = [
                     {x: 240, y: 120, w: 15, h: 15, collected: false},
                     {x: 240, y: 160, w: 15, h: 15, collected: false},
                     {x: 240, y: 200, w: 15, h: 15, collected: false},
                     {x: 240, y: 245, w: 15, h: 15, collected: false},
  ];

  coins_level_3 = [
                     {x: 240, y: 120, w: 15, h: 15, collected: false},
                     {x: 240, y: 160, w: 15, h: 15, collected: false},
                     {x: 240, y: 200, w: 15, h: 15, collected: false},
                     {x: 240, y: 245, w: 15, h: 15, collected: false},
  ];

  coins_level_7 = [
                     {x: 90, y: 182, w: 15, h: 15},
                     {x: 220, y: 182, w: 15, h: 15},
                     {x: 157, y: 245, w: 15, h: 15},
                     {x: 157, y: 120, w: 15, h: 15},

                     {x: 280, y: 182, w: 15, h: 15},
                     {x: 410, y: 182, w: 15, h: 15},
                     {x: 374, y: 245, w: 15, h: 15},
                     {x: 347, y: 120, w: 15, h: 15},    
  ];

  coins_level_8 = [];

  coins = [coins_level_1, coins_level_2, coins_level_3,coins_level_4,coins_level_5,coins_level_6,coins_level_7,coins_level_8];
  
  walls = [{x: 0, y: 0, w: 480, h: 100},
           {x: 0, y: 270, w: 480, h: 100}];

  endzones = [{x: 0, y: 100, w: 50, h: 167},
              {x: 431, y: 100, w: 50, h: 167}];

  time = 0;
  time_tenth = 0;
  time_hundredth = 0;

  setInterval(add_time,1000);
  setInterval(add_time_tenth,100);
  setInterval(add_time_hundredth,10);

  // setInterval(reset_time_tenth,1000);
  // setInterval(reset_time_hundredth,100);

  for (i = 0; i < 60; i++) {
    do_opacity();
  }
}

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
    draw_endzones();
    do_player();
    do_coins();
    do_enemy();
    draw_walls();
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

      if (each_enemy.x < 56 && each_enemy.y < 106) {
        move_obj(each_enemy,397,230,100);
      }
      if (each_enemy.x > 396 && each_enemy.y > 229) {
        move_obj(each_enemy,55,105,100);
      }
      if (each_enemy.x > 396 && each_enemy.y < 106) {
        move_obj(each_enemy,55,230,100);
      }
      if (each_enemy.x < 56 && each_enemy.y > 229) {
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

      if (each_enemy.x > 395 && each_enemy.y == 105) {
        each_enemy.or = "vert";
        each_enemy.x = 395;
      }
      if (each_enemy.x == 395 && each_enemy.y > 230) {
        each_enemy.or = "hor";
        each_enemy.y = 230;
        each_enemy.vl *= -1;
      }
      if (each_enemy.x < 55 && each_enemy.y == 230) {
        each_enemy.or = "vert";
        each_enemy.x = 55;
      }
      if (each_enemy.x == 55 && each_enemy.y < 105) {
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
  if (player.y > 270-player.h) {
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

function draw_walls () {
  fill(0);
  for (each_wall of walls) {
    rect(each_wall.x, each_wall.y, each_wall.w, each_wall.h);
  }
}

function draw_endzones () {
  for (each_endzone of endzones) {
    fill(114,255,184);
    rect(each_endzone.x, each_endzone.y, each_endzone.w, each_endzone.h);
  }
}

function do_coins () {
  ellipseMode(CENTER);
  if (current_level == 1) {
    for (each_coin of coins_level_1) {
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
  } else if (current_level == 2) {
    for (each_coin of coins_level_2) {
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
  } else if (current_level == 3) {
    for (each_coin of coins_level_3) {
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
  } else if (current_level == 4) {
    for (each_coin of coins_level_4) {
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
  }  else if (current_level == 5) {
    for (each_coin of coins_level_5) {
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
  } else if (current_level == 6) {
    for (each_coin of coins_level_6) {
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
  }  else if (current_level == 7) {
    for (each_coin of coins_level_7) {
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