function setup() {
    let canvas = createCanvas(640,480);
    canvas.parent('appContainer')
    // noLoop();
}

function draw() {
    background(200);
    noFill();
    rect(0,0,640,480);
}