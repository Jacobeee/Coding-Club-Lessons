// Declare global variables here

// Initialize global variables here
// var x, y, w, h, a,b, c, d
// function setup() {
//     canvas = createCanvas(document.body.clientWidth, window.innerHeight);
//     canvas.position(0, 0);
//     canvas.class("p5canvas");
//     x = width/2;
//     y = height/2; 
//     w = 500;
//     h = 500;
//     a = width/4;
//     b = height/4;
//     c = 200;
//     d = 100;
// }

// // Draw scene here
// function draw() {
//     background(255, 245, 0);
//     if (x<width - w/2) {
//         x += 5;
//     }
// fill(255,255,255);
// stroke(255,255,0);
// //x += 5;
// //fill(0,200,250);
//     ellipse(x, y, w, h);
//     fill (0, 255, 0);
//     ellipse(a,b,c,d);
//     rect(x,y,w ,h);
// }

// function windowResized() {
//     resizeCanvas(document.body.clientWidth, window.innerHeight);
// }
// Declare global variables here
class Bird {
    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.size = size

        this.vel = 0;
        this.acc = 1;
    }
    //bird appearance
    display() {
        fill(255, 255, 0)
        ellipse(this.x, this.y, this.size, this.size);
    }
    //bird gravity
    update() {
        this.vel += this.acc;
    this.y += this.vel;
        // this.y += 0

        if (this.y > height - this.size/2) {
            this.y = height - this.size/2;
            this.vel = 0;
        }

        if (this.y < this.size/2) {
            this.y = this.size/2;
        }
    }
    //bird movement
    flap() {
        this.vel = -10;
    }

}

class Pipe {
    constructor(x,yGap, gapSize) {
        this.x = x;
        this.yGap = yGap;
        this.gapSize = gapSize;
    }
update() {
    this.x -= 5;
}

collide(player) {
    let radius = player.size/2;
    if (player.x+radius >= this.x && player.x-radius <= this.x+100 &&
        (player.y >= height-this.yGap+this.gapSize/2 || player.y <= height-this.yGap-this.gapSize/2)) {
            collided = true;
        }
        
}
    display() {
        fill(0,255,0);
        // rect(this.x, height-(this.yGap+this.gapSize/2), 100, (this.yGap+this.gapSize/2));
        rect(this.x, height-this.yGap+this.gapSize/2, 100, this.yGap);
        rect(this.x, 0, 100, height-this.yGap-this.gapSize/2);
        // rect(this.x, height/2, 50, 50); 
    }
}
var bird;
var pipes = [];
var collided;
var timer = 0;
function setup() {
    canvas = createCanvas(document.body.clientWidth, window.innerHeight);
    canvas.position(0,0);
    canvas.class("p5canvas");

    bird = new Bird(width/2, height/2, 50);
    pipes.push(new Pipe(width, random(height/4, 3*height/4), 200));
    collided = false;
}

// Draw scene here
function draw() {
    background(0, 50, 50);

    for (let i = pipes.length-1; i>= 0; i--) {
        // for (var i = 0; i < pipes.length; i++) {
            if (!collided) {
                pipes[i].update();
                if (pipes[i].collide(bird)) {
                    collided = true;
                }
            }
            pipes[i].display();

            if (pipes[i].x < -100) {
                pipes.splice(i, 1);
            }
            pipes[i].collide(bird);

                        
        }
    timer ++;
    if (timer % 100 === 0) {
        pipes.push(new Pipe(width, random(height/4, 3*height/4), 200));
    }
        
    bird.display();
    
    bird.update();
}

function reset() {
    bird = new Bird(width/2, height/2, 50);
    pipes = [new Pipe(width, random(height/4, 3*height/4), 200)];
    collided = false;
    timer = 0;  
}

function mousePressed() {
    if (!collided) {
        bird.flap();
    } else {
        reset();
    }
}

function keyPressed() {
    if (keyCode === 32 && !collided) {
        bird.flap();
    }
    if(collided) {
        reset();
    }
}

function windowResized() {
    resizeCanvas(document.body.clientWidth, window.innerHeight);
}
