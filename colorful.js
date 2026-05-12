function setup() {
createCanvas(windowWidth, windowHeight);
background(200, 200, 30);
rectMode(CENTER);
textSize(60);
}

function draw() {
background(200, 200, 30, 2);
fill(random(255), random(255), random(255));
circle(mouseX, mouseY, random(120));
textSize(random(100));
}
