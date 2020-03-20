// global var initialization

// corners of the color picker
c1x = 0
c1y = windowHeight - windowHeight/7.
c2x = windowWidth
c2y = windowHeight
currentColor = 0
numColors = 3
clrArray = [[255,0,0],[0,255,0],[0,0,255]]

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  noLoop();
  c1x = 0
  c1y = window.innerHeight - window.innerHeight/6.
  c2x = window.innerWidth
  c2y = window.innerHeight * 1.1
  clrArray = [[0,0,0],       //white
              [255,255,255], //black
              [224,224,224], //light gray
              [128,128,128], //gray
              [255,  0,  0], //red
              [255, 96,208], //pink
              [160, 32,255], //purple
              [ 80,208,255], //light blue
              [  0, 32,255], //blue
              [ 96,255,128], //yellow green
              [  0,192,  0], //green
              [255,224, 32], //yellow
              [255,160, 16], //orange
              [160,128, 96], //brown
              [255,208,160]] //pale pink
  numColors = clrArray.length
}

function draw() {
  // draw the color picker
  rectMode(CORNERS);
  fill(0);
  rect(c1x,c1y,c2x,c2y)
  // 3 colors
  rectMode(CORNER);

  start = 0

  for(i = 0; i < numColors; i++){
    fill(clrArray[i][0], clrArray[i][1], clrArray[i][2])
    rect(start, c1y, windowWidth / numColors, windowHeight/6.)
    start += windowWidth / numColors
  }
}

function mousePressed() {
   if(mouseY >= c1y){
    currentColor = (mouseX / (windowWidth/numColors) )>>0
   }else{
    fill(clrArray[currentColor][0],clrArray[currentColor][1],clrArray[currentColor][2]);
    ellipse(mouseX,mouseY,50,50)
   }
   redraw();
 }
