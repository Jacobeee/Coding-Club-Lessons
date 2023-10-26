// Declare global variables here

// Initialize global variables here
var x, y, w, h, a,b, c, d
function setup() {
    canvas = createCanvas(document.body.clientWidth, window.innerHeight);
    canvas.position(0, 0);
    canvas.class("p5canvas");
    x = width/2;
    y = height/2; 
    w = 500;
    h = 500;
    a = width/4;
    b = height/4;
    c = 200;
    d = 100;
}

// Draw scene here
function draw() {
    background(255, 245, 0);
    if (x<width - w/2) {
        x += 5;
    }
fill(255,255,255);
stroke(255,255,0);
//x += 5;
//fill(0,200,250);
    ellipse(x, y, w, h);
    fill (0, 255, 0);
    ellipse(a,b,c,d);
    rect(x,y,w ,h);
}

function windowResized() {
    resizeCanvas(document.body.clientWidth, window.innerHeight);
}