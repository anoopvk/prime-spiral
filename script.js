


var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
var canvaswidth;
var canvasheight;
var primearray = [2];
var number = 0;


var size;

var zoomfactor=2;
var speedfactor = 50;




// var hue=0;
// createPrimeArray(size);
console.log(primearray);



init()
window.addEventListener("resize", init);
function init() {
    number = 0;
    canvaswidth = window.innerWidth - 2;
    canvasheight = window.innerHeight - 2;
    canvas.width = canvaswidth;
    canvas.height = canvasheight;



    canvaswidth2=canvaswidth/zoomfactor;
    canvasheight2=canvasheight/zoomfactor;
    if(canvaswidth>canvasheight){
        size=(canvaswidth2*canvaswidth2)/(Math.log(canvaswidth2*canvaswidth2)-1)
    }
    else{
        size=(canvasheight2*canvasheight2)/(Math.log(canvasheight2*canvasheight2)-1)
    }
    size=Math.ceil(size);


    if(primearray.length<size){
        console.log("calling create primearray");
        createPrimeArray(size);
        console.log("created primearray");
    }


    callPlot();

}


function draw(x, y) {
    c.beginPath();
    c.strokeStyle = "rgba(0,0,0,1)"
    // c.strokeStyle = "hsl("+hue+", 100%, 50%)";
    // hue+=0.05;
    // hue=hue%360;
    c.rect((canvaswidth / 2) + x * zoomfactor, (canvasheight / 2) - y * zoomfactor, zoomfactor/5, zoomfactor/5);
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
    // console.log(x, y, maxx, maxy, dir);
    draw(x, y);



}


function callPlot() {
    console.log(number);
    for (let i = 0; i < speedfactor; i++) {
        plotpoint(primearray[number + i]);

    }
    number += speedfactor;
    if (number < size - speedfactor) {
        // setTimeout(callPlot, 4);
        requestAnimationFrame(callPlot);
        // callPlot();

    }



    // for(let i=0; i<primearray.length;i++){
    //     plotpoint(primearray[i]);
    // }

}


function createPrimeArray(size) {
    let currentnum = primearray[primearray.length-1]+1;

    while (primearray.length < size) {
        let flag = true;
        for (let i = 0; i < primearray.length; i++) {
            if (currentnum % primearray[i] == 0) {
                flag = false;
            }
        }
        if (flag) {
            if(!primearray.includes(currentnum)){
                primearray.push(currentnum);
                console.log(primearray.length+" / " + size);
            }
        }
        currentnum++;
    }
}


function isPrime(num) {
    if (primearray.includes(num)) {
        return true;
    }
    return false;
}