let xStart = 0;
let inc = 0.02;
let counter2 = 10000;
function setup() {
    createCanvas(400, 400)
}

function draw() {
    background(0);
    stroke(255);
    beginShape();
    let xoff = xStart;
    for (let x = 0; x < width; x++) {
        let y = noise(xoff) * height;
        vertex(x, y);
        xoff += inc;
    }
    xStart += inc;
    endShape();
}
