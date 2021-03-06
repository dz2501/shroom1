var canvas;
let particle = [];
const num = 1300;
const noiseScale = 0.01;

    
function setup() {
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0,0,'fixed');
  canvas.style ('z-index', '-2')
  
  for(let i = 0; i < num; i ++) {
    particle.push(createVector(random(width), random(height)));
  }
  stroke(255);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0,10);
  for(let i = 0; i < num; i++) {
    let p= particle[i];
    point(p.x,p.y);
    let n = noise(p.x * noiseScale, p.y * noiseScale);
    let a = TAU * n;
    p.x += cos(a);
    p.y += sin(a);  
    if(!onScreen(p)) {
      p.x = random(width);
      p.y = random(height);
    }
  } 
}

function mouseMoved() {
//function mouseReleased() {
  noiseSeed(millis());
}

function onScreen(v) {
  return v.x >= 0 && v.x <= width && v.y >= 0 && v.y <= height;
}