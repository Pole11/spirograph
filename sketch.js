// p < r < R

let p = 100;
let r = 140;
let R = 200;
let x;
let y;
let px = 0;
let py = 0;
let cx;
let cy;
let t = 0;
let canvas2;
let dt = 0;

let red = 0;
let green = 0;
let blue = 0;
let alpha = 255;

let offset = 40;

let sliderwidth = '150px';

var c;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);
  cx=width/2;
  cy=height/2;
  let offset = height/20;
  c = canvas2 = createGraphics(width, height);
  canvas2.pixelDensity(1);
  canvas2.background(0,25,25);
  canvas2.translate(cx,cy);
  
  // sliders for the shape
  p_slider = createSlider(0,600,140, 5); 
  p_slider.position(20, offset);
  p_slider.style('width', sliderwidth);
  r_slider = createSlider(0,600,245, 5); 
  r_slider.position(20, offset*2);
  r_slider.style('width', sliderwidth);
  R_slider = createSlider(0,600,400, 5); 
  R_slider.position(20, offset*3);
  R_slider.style('width', sliderwidth);
  t_slider = createSlider(1,500,50); 
  t_slider.position(20, offset*4);
  t_slider.style('width', sliderwidth);
  
  // sliders for the colors
  red_slider = createSlider(0,255,255); 
  red_slider.position(20, offset*6);
  red_slider.style('width', sliderwidth);
  green_slider = createSlider(0,255,255); 
  green_slider.position(20, offset*7);
  green_slider.style('width', sliderwidth);
  blue_slider = createSlider(0,255,255); 
  blue_slider.position(20, offset*8);
  blue_slider.style('width', sliderwidth);
  alpha_slider = createSlider(0,255,255); 
  alpha_slider.position(20, offset*9);
  alpha_slider.style('width', sliderwidth);
  
  thickness_slider = createSlider(1,50,2); 
  thickness_slider.position(20, offset*11);
  thickness_slider.style('width', sliderwidth);
  
  // button to clear the canvas
  button_clear = createButton('🗑');
  button_clear.position(20,offset*12);
  button_clear.size(150, 40);
  button_clear.mousePressed(clearcv2);

  button_save = createButton('💾');
  button_save.position(20,offset*13);
  button_save.size(150, 40);
  button_save.mousePressed(saveImage);
}

function draw() {
  // put drawing code here
  background(0,25,25);
  translate(cx + 150,cy);
  imageMode(CENTER);
  image(canvas2, 0, 0, width, height);
  let offset = height/20;

  // assing values of the sliders for the shape
  p = p_slider.value();
  r = r_slider.value();
  R = R_slider.value();
  dt = t_slider.value()/1000;

  // assing values of the sliders for the colors
  red = red_slider.value();
  green = green_slider.value();
  blue = blue_slider.value();
  alpha = alpha_slider.value();
  
  thickness = thickness_slider.value();
  
  // text to show the values of the sliders for the shape
  textSize(18);
  textStyle(NORMAL);
  textFont('Trebuchet MS');
  noStroke();
  fill(255)
  p_text = text("p = " + p,130 - cx - 150, offset - cy);
  r_text = text("r = " + r,130 - cx - 150, offset*2 - cy);
  R_text = text("R = " + R,130 - cx - 150, offset*3 - cy);
  t_text = text("speed = " + parseInt(dt*100),130 - cx  - 150, offset*4 - cy);
  
  // text to show the values of the sliders for the colors
  let showRed = map(red, 0, 255, 50, 255);
  fill(showRed,0,0,255);
  red_text = text("red = " + red,130 - cx  - 150, offset*6 - cy);
  let showGreen = map(green, 0, 255, 50, 255);
  fill(0,showGreen,0,255);
  green_text = text("green = " + green,130 - cx  - 150, offset*7 - cy);
  let showBlue = map(blue, 0, 255, 130, 255);
  fill(0,0,showBlue,255);
  blue_text = text("blue = " + blue,130 - cx - 150, offset*8 - cy);
  let showAlpha = map(alpha, 0, 255, 50, 255);
  fill(255,255,255,showAlpha);
  alpha_text = text("alpha = " + alpha,130 - cx - 150, offset*9 - cy);
  
  fill(255);
  thickness_text = text("thickness = " + thickness,130 - cx - 150, offset*11 - cy);  
  
  k = r/R;
  l = p/r;
  
  // set the position of the 'pen'
  x = R * ((1-k) * cos(t) + l*k*cos((1-k) * t/k));
  y = R * ((1-k) * sin(t) + l*k*sin((1-k) * t/k));
  t -= dt;

  // drawing
  if (frameCount > 1) {
    canvas2.stroke(red,green,blue,alpha);
    fill(red,green,blue,alpha);
    let diameter = map(thickness, 1, 50, 8, 60)
    ellipse(x,y,diameter,diameter);
    canvas2.strokeWeight(thickness);
    canvas2.line(px,py,x,y);
  }

  // need to know to previous position of the pen to draw the line
  px = x;
  py = y;
}

// function that clears the canvas, see the button at the top of the code
function clearcv2() {
  canvas2.background(0,25,25);
}

// save the canvas as image
function saveImage() {
  saveCanvas(c, 'spirograph', 'jpg');
}