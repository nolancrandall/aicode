// set up canvas and grab reference to 2d drawing context
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// create image objects for original and new image
const image1 = new Image();
image1.src = 'image1.png';
const image2 = new Image();
image2.src = 'image2.png';

// set up initial position and velocity for original image
let x = 50;
let y = 50;
let vx = 5;
let vy = 5;

// set up initial position and velocity for new image
let x2 = 100;
let y2 = 100;
let vx2 = -5;
let vy2 = -5;

// function to draw the images on the canvas
function draw() {
  // clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // draw the original image
  ctx.drawImage(image1, x, y, 50, 50);

  // draw the new image if it exists
  if (newImage) {
    ctx.drawImage(image2, x2, y2, 50, 50);
  }
}

// function to update the position of the images
function update() {
  // update the position of the original image
  x += vx;
  y += vy;

  // bounce the image off the edges of the canvas
  if (x + 50 > canvas.width || x < 0) {
    vx = -vx;
  }
  if (y + 50 > canvas.height || y < 0) {
    vy = -vy;
  }

  // update the position of the new image if it exists
  if (newImage) {
    x2 += vx2;
    y2 += vy2;

    // bounce the image off the edges of the canvas
    if (x2 + 50 > canvas.width || x2 < 0) {
      vx2 = -vx2;
    }
    if (y2 + 50 > canvas.height || y2 < 0) {
      vy2 = -vy2;
    }

    // check for collision between the two images
    if (x < x2 + 50 && x + 50 > x2 && y < y2 + 50 && y + 50 > y2) {
      // handle collision
    }
  }
}

// function to add a new image to the canvas
function addImage() {
  // set flag to indicate that a new image has been added
  newImage = true;
}

// add event listener to add a new image when the screen is clicked
canvas.addEventListener('click', addImage);

// set up interval to animate the images
setInterval(function() {
  draw();
  update();
}, 1000 / 60);