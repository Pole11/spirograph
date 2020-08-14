// 1 is the circle that is not moving
let x1;
let y1;
let d1 = 500;

// 2 is the circle that is moving and has as center the points of the circle 1
let x2;
let y2;
let d2 = 160;
let a2 = 0;

// 3 is the line from the center of the circle 2 and the center of the pen
// x2 is going to be start x of the line and x3_end the ending point of the line
let x3_end;
let y3_end;
let px3_end
let py3_end;
let a3 = 0;

// variables for the sliders, button and UI


function setup() {
  // canvas1 is the bg, it is continously updated
  canvas1 = createCanvas(windowWidth, windowHeight);
  // canvas2 is the canvas where the spirograph is drawn
  c = canvas2 = createGraphics(width, height);
  cx = width / 2;
  cy = height / 2;
  let offset = height/20;
  canvas2.pixelDensity(1);
  canvas2.background(0,25,25,255);
  canvas2.translate(cx,cy);
  
  // sliders for the shape
  p_slider = createSlider(0,600,140, 5); 
  p_slider.position(20, offset);
  p_slider.style('width', '150px');
  
  r_slider = createSlider(0,600,245, 5); 
  r_slider.position(20, offset*2);
  r_slider.style('width', '150px');
  
  R_slider = createSlider(0,600,400, 5); 
  R_slider.position(20, offset*3);
  R_slider.style('width', '150px');
  
  speed_slider = createSlider(1, 300,50); 
  speed_slider.position(20, offset*4);
  speed_slider.style('width', '150px');
  
  t1_slider = createSlider(1, 100,60); 
  t1_slider.position(20, offset*7);
  t1_slider.style('width', '150px');
  
  t2_slider = createSlider(1, 100,35); 
  t2_slider.position(20, offset*8);
  t2_slider.style('width', '150px');  
  
  // button to clear the canvas
  button_clear = createButton('🗑');
  button_clear.position(20,offset*12);
  button_clear.size(150, 40);
  button_clear.mousePressed(clearcv2);
}

function draw() {
  background(0, 25, 25);
  color1 = color(255,255,75,255); // yellow
  color2 = color(255,0,255,255); // fucsia
  color3 = color(0, 255, 255, 255) // cyan
  
  // show the canvas where the spirograph is drawn
  let offset = height/20;
  translate(cx + 150, cy);
  imageMode(CENTER);
  image(canvas2, 0, 0, width, height);
  
  // sliders and button background
  noStroke();
  fill(0,15,15);
  rect(- cx - 150, - cy, 150 + offset, height);
  
  // assign slider values to variables
  p = p_slider.value(); // line 3
  R = R_slider.value(); // diameter of circle 1
  r = r_slider.value(); // diameter of circle 2
  speed = speed_slider.value() / 100;
  t1 = t1_slider.value() * speed / 1000; // time of a3
  t2 = t2_slider.value() * speed / 1000; // time of a2

  
  // text to show the values of the sliders for the shape
  textSize(18);
  textStyle(NORMAL);
  textFont('Trebuchet MS');
  noStroke();
  fill(color3)
  p_text = text("lenght (p) = " + p,20 - cx - 150, offset - cy);
  fill(color2);
  r_text = text("radius (r) = " + r,20 - cx - 150, offset*2 - cy);
  fill(color1);
  R_text = text("RADIUS (R) = " + R,20 - cx - 150, offset*3 - cy);
  fill(255);
  speed_text = text("speed = " + parseInt(speed * 100),20 - cx - 150, offset*4 - cy);  
  t1_text = text("Δ angle 1 = 0.0" + parseInt(t1 * 1000),20 - cx - 150, offset*7 - cy);
  t2_text = text("Δ angle 2 = 0.0" + parseInt(t2 * 1000),20 - cx - 150, offset*8 - cy);

  strokeWeight(3);
  // circle 1
  ellipseMode(CENTER);
  x1 = 0 - 50;
  y1 = 0;
  stroke(color1);
  noFill();
  ellipse(x1, y1, R, R);
  
  // circle 2
  a2 -= t2;
  x2 = Math.cos(a2) * (R/2) + x1;
  y2 = Math.sin(a2) * (R/2) + y1;
  stroke(color2);
  noFill();
  ellipse(x2, y2, r, r);
  
  // line 3
  a3 += t1;
  x3_end = Math.cos(a3) * (r - p) + x2;
  y3_end = Math.sin(a3) * (r - p) + y2;
  stroke(color3);
  line(x2, y2, x3_end, y3_end);
  
  if (frameCount > 1) {
    canvas2.strokeWeight(2);
    canvas2.stroke(255);
    canvas2.line(px3_end, py3_end, x3_end, y3_end);
    fill(255);
    noStroke();
    ellipse(x3_end, y3_end, 8, 8);
  }
  
  px3_end = x3_end;
  py3_end = y3_end;

}

// function that clears the canvas, see the button at the top of the code
function clearcv2() {
  canvas2.background(0,25,25);
}

