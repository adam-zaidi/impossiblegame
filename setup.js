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

	coin_sound_effect = loadSound("data/coin-sound-effect2.mp3");
	death_sound_effect = loadSound("data/death-sound-effect5.mp3");
	death_sound_effect.setVolume(1);
	beat_level_sound_effect = loadSound("data/beat-level-sound-effect2.mp3");

  player = {x:5,y:140,w:30,h:30};

  enemies_level_1 = [{x: 185, y: 100, w: 30, h: 30, vl: 3},
                     {x: 265, y: 100, w: 30, h: 30, vl: 3},
                     {x: 345, y: 100, w: 30, h: 30, vl: 3}];
  
  enemies_level_2 = [{x: 65, y: 105, w: 30, h: 30, vl: 3},
                     {x: 385, y: 145, w: 30, h: 30, vl: 3},
                     {x: 65, y: 185, w: 30, h: 30, vl: 3},
                     {x: 385, y: 225, w: 30, h: 30, vl: 3}];
  
  enemies_level_3 = [{x: 65, y: 105, w: 30, h: 30, x_vl: 0, y_vl: 0},
                     {x: 385, y: 230, w: 30, h: 30, x_vl: 0, y_vl: 0},
                     {x: 65, y: 230, w: 30, h: 30, x_vl: 0, y_vl: 0},
                     {x: 385, y: 105, w: 30, h: 30, x_vl: 0, y_vl: 0}];

  enemies_level_4 = [
                     {x: 105, y: 105, w: 30, h: 30, vl: 3, or: "hor"},
                     {x: 145, y: 105, w: 30, h: 30, vl: 3, or: "hor"},
                     {x: 185, y: 105, w: 30, h: 30, vl: 3, or: "hor"},

                     {x: 305, y: 105, w: 30, h: 30, vl: 3, or: "hor"},
                     {x: 345, y: 105, w: 30, h: 30, vl: 3, or: "hor"},
                     {x: 385, y: 105, w: 30, h: 30, vl: 3, or: "hor"},

                     {x: 385, y: 145, w: 30, h: 30, vl: 3, or: "vert"},
                     {x: 385, y: 185, w: 30, h: 30, vl: 3, or: "vert"},
                     {x: 385, y: 225, w: 30, h: 30, vl: 3, or: "vert"},

                     {x: 345, y: 225, w: 30, h: 30, vl: -3, or: "hor"},
                     {x: 305, y: 225, w: 30, h: 30, vl: -3, or: "hor"},
                     {x: 265, y: 225, w: 30, h: 30, vl: -3, or: "hor"},
                     {x: 225, y: 225, w: 30, h: 30, vl: -3, or: "hor"},
                     {x: 185, y: 225, w: 30, h: 30, vl: -3, or: "hor"},
                     {x: 145, y: 225, w: 30, h: 30, vl: -3, or: "hor"},
                     {x: 105, y: 225, w: 30, h: 30, vl: -3, or: "hor"},
                     {x: 65, y: 225, w: 30, h: 30, vl: -3, or: "vert"},
                     
                     {x: 65, y: 188, w: 30, h: 30, vl: -3, or: "vert"},
                     {x: 65, y: 146, w: 30, h: 30, vl: -3, or: "vert"},
                     {x: 65, y: 105, w: 30, h: 30, vl: 3, or: "hor"},
  ];

  enemies_level_5 = [
                     {x: 105, y: 105, w: 30, h: 30, vl: 3},
                     	{x: 145, y: 225, w: 30, h: 30, vl: -3},
                     {x: 185, y: 105, w: 30, h: 30, vl: 3},
                     	{x: 225, y: 225, w: 30, h: 30, vl: -3},
                     {x: 265, y: 105, w: 30, h: 30, vl: 3},
                     	{x: 305, y: 225, w: 30, h: 30, vl: -3},
                     {x: 345, y: 105, w: 30, h: 30, vl: 3},
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

  coins_level_1 = [{x: 152, y: 192, w: 16, h: 16, collected: false},
                  {x: 232, y: 152, w: 16, h: 16, collected: false},
                  {x: 312, y: 192, w: 16, h: 16, collected: false},
                  {x: 392, y: 152, w: 16, h: 16, collected: false}];

  coins_level_2 = [{x: 272, y: 112, w: 16, h: 16, collected: false},
                   {x: 192, y: 152, w: 16, h: 16, collected: false},
                   {x: 272, y: 192, w: 16, h: 16, collected: false},
                   {x: 192, y: 232, w: 16, h: 16, collected: false}];

  coins_level_3 = [
                     {x: 232, y: 112, w: 16, h: 16, collected: false},
                     {x: 232, y: 152, w: 16, h: 16, collected: false},
                     {x: 232, y: 192, w: 16, h: 16, collected: false},
                     {x: 232, y: 232, w: 16, h: 16, collected: false},
  ];

	coins_level_4 = [  {x: 112, y: 112, w: 16, h: 16, collected: false},
											{x: 152, y: 112, w: 16, h: 16, collected: false},
											{x: 192, y: 112, w: 16, h: 16, collected: false},

											{x: 312, y: 112, w: 16, h: 16, collected: false},
											{x: 352, y: 112, w: 16, h: 16, collected: false},
											{x: 392, y: 112, w: 16, h: 16, collected: false},

											{x: 392, y: 152, w: 16, h: 16, collected: false},
											{x: 392, y: 192, w: 16, h: 16, collected: false},
											{x: 392, y: 232, w: 16, h: 16, collected: false},

											{x: 352, y: 232, w: 16, h: 16, collected: false},
											{x: 312, y: 232, w: 16, h: 16, collected: false},
											{x: 272, y: 232, w: 16, h: 16, collected: false},
											{x: 232, y: 232, w: 16, h: 16, collected: false},
											{x: 192, y: 232, w: 16, h: 16, collected: false},
											{x: 152, y: 232, w: 16, h: 16, collected: false},
											{x: 112, y: 232, w: 16, h: 16, collected: false},
											{x: 72, y: 232, w: 16, h: 16, collected: false},
											
											{x: 72, y: 192, w: 16, h: 16, collected: false},
											{x: 72, y: 152, w: 16, h: 16, collected: false},
											{x: 72, y: 112, w: 16, h: 16, collected: false}
	];
  
  coins_level_5 = [{x: 112, y: 172, w: 16, h: 16, collected: false},
                   {x: 152, y: 172, w: 16, h: 16, collected: false},
                   {x: 192, y: 172, w: 16, h: 16, collected: false},
                   {x: 232, y: 172, w: 16, h: 16, collected: false},
                   {x: 272, y: 172, w: 16, h: 16, collected: false},
                   {x: 312, y: 172, w: 16, h: 16, collected: false},
                   {x: 352, y: 172, w: 16, h: 16, collected: false}];


  coins_level_6 = [
                     {x: 232, y: 112, w: 16, h: 16, collected: false},
                     {x: 232, y: 152, w: 16, h: 16, collected: false},
                     {x: 232, y: 192, w: 16, h: 16, collected: false},
                     {x: 232, y: 232, w: 16, h: 16, collected: false},
  ];

  coins_level_7 = [
                     {x: 92, y: 172, w: 16, h: 16, collected: false},
                     {x: 212, y: 172, w: 16, h: 16, collected: false},
                     {x: 152, y: 232, w: 16, h: 16, collected: false},
                     {x: 152, y: 112, w: 16, h: 16, collected: false},

                     {x: 280, y: 172, w: 16, h: 16, collected: false},
                     {x: 400, y: 172, w: 16, h: 16, collected: false},
                     {x: 347, y: 232, w: 16, h: 16, collected: false},
                     {x: 347, y: 112, w: 16, h: 16, collected: false},    
  ];

  coins_level_8 = [];

  coins = [coins_level_1, coins_level_2, coins_level_3,coins_level_4,coins_level_5,coins_level_6,coins_level_7,coins_level_8];
  
  walls = [{x: 0, y: 0, w: 480, h: 100},
           {x: 0, y: 260, w: 480, h: 100}];

  endzones = [{x: 0, y: 100, w: 60, h: 160},
              {x: 420, y: 100, w: 60, h: 160}];

  time = 0;
  time_tenth = 0;
  time_hundredth = 0;

  setInterval(add_time,1000);
  setInterval(add_time_tenth,100);
  setInterval(add_time_hundredth,10);

  for (i = 0; i < 60; i++) {
    do_opacity();
  }
}