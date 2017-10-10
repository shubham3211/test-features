let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let xStart = 0;
let inc = 0.005;
function setup() {
    createCanvas(windowWidth, windowHeight)
    noiseDetail(2);
}

function draw() {
    background(241);
    stroke(0);
    beginShape();
    strokeWeight(20);
    fill(241);
    strokeCap(ROUND);
    let xoff = xStart;
    let y;
    for (let x = 0; x < width / 2; x++) {
        y = noise(xoff) * height;
        vertex(x, y);
        xoff += inc;
    }
    endShape();
    ellipse(width / 2, y, 15);
    xStart += inc;
}

