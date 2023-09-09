let img;

function preload() {
    img = loadImage("https://images.unsplash.com/photo-1693952875302-9e600b8ddc6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80");
}

function setup() {
    createCanvas(img.width, img.height);
    background(0);
    img.loadPixels();
    image(img, 0, 0);
    console.log(pixelDensity());
}

function draw() {

}