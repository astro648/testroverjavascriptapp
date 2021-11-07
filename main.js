canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
roverWidth = 100;
roverHeight= 100;
roverX=10;
roverY=10;
background_image="mars.jpg";
rover_image="rover.png";
function add(){
    background_imgTag = new Image();
    background_imgTag.onload=uploadBackground;
    background_imgTag.src = background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadRover;
    rover_imgTag.src = rover_image;
}
function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
    
}
function uploadRover(){
    ctx.drawimage(rover_imgTag,roverX,roverY,rover.width,rover.height);
}
window.addEventListener("keyDown",my_keyDown);
function my_keyDown(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == 38){
        up();
        console.log("up");
    }
    if(keyPressed == 40){
        down();
        console.log("down");
    }
    if(keyPressed == 39){
        right();
        console.log("right");
    }
    if(keyPressed == 37){
        left();
        console.log("left");
    }
}