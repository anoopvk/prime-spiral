


var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var canvaswidth;
var canvasheight;
init()
window.addEventListener("resize", init);
function init() {
    canvaswidth = window.innerWidth - 2;
    canvasheight = window.innerHeight - 2;
    canvas.width = canvaswidth;
    canvas.height = canvasheight;

}





function draw(x, y) {
    c.beginPath();
    c.strokeStyle = "rgba(255,0,0,1)"
    c.rect((canvaswidth / 2) + x * 5, (canvasheight / 2) - y * 5, 1, 1);
    c.stroke();
}
















function plotpoint(num) {

    var x = 0;
    var y = 0;
    var maxy = 1;
    var maxx = 1;
    var dir = "right";

    for (let i = 0; i < num; i++) {
        // console.log(x,y,maxx,maxy,dir);

        if (dir == "right") {
            x++;
            if (x == maxx) {
                maxx = -maxx;
                dir = "up";
            }
        }

        else if (dir == "left") {
            x--;
            if (x == maxx) {
                maxx = -maxx + 1;
                dir = "down";
            }
        }

        else if (dir == "up") {
            y++;
            if (y == maxy) {
                maxy = -maxy;
                dir = "left";
            }
        }


        else if (dir == "down") {
            y--;
            if (y == maxy) {
                maxy = -maxy + 1;
                dir = "right";
            }
        }


    }
    console.log(x, y, maxx, maxy, dir);
    draw(x, y);



}

// for (let i = 0; i < 20; i++) {
//     plotpoint(i);
// }








var number = 0;

function callPlot() {
    console.log(number);
    if(isPrime(number)){
        plotpoint(number);
    }
    number++;
    if (number < 10000) {
        setTimeout(callPlot, 0.1);
    }
}

callPlot();



function isPrime(num){
    if(num%2==0){
        return true;
    }
    return false;
}