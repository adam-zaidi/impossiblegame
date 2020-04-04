function draw_background () {
	color = 1;
	for (var i = 0; i < 4; i++) {
		for (var j = 0; j < 9; j++) {
			if (color > 0) {
				fill(178,178,178);
				color *= -1;
			} else {
				fill(229,229,229);
				color *= -1;
			}
			noStroke();
			rect(j*40+60, i*40+100,40,40);
		}
	}

	for (each_endzone of endzones) {
    fill(114,255,184);
    rect(each_endzone.x, each_endzone.y, each_endzone.w, each_endzone.h);
  }

	fill(0);
  for (each_wall of walls) {
    rect(each_wall.x, each_wall.y, each_wall.w, each_wall.h);
  }
}