let particles = [];
let font;
function preload() {
    font = loadFont("./Anton-Regular.ttf");
}

function setup() {
    createCanvas(800, 300);
    textFont(font);
    // textSize(200);
    // fill(255);
    // noStroke();
    // text("train", 100, 200);
    let points = font.textToPoints("ASHISH", 100, 200, 200);
    for (let i = 0; i < points.length; i++) {
        let pt = points[i];
        particles.push(new Particle(pt.x, pt.y));
    }
}
let x = 0, y = 0;
function draw() {
    background(0);
    for (let i = 0; i < particles.length; i++) {
        particles[i].behavior();
        particles[i].update();
        particles[i].show();
    }
}
