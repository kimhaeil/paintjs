const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#FF3B30";
ctx.lineWidth = 2.5;

let painting = false;

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if(!painting){
        console.log("create path in", x, y);
        ctx.beginPath();
        ctx.moveTo(x,y);
    }else{
        console.log("create line in", x, y);
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function stopPainting() {
    painting = false;
}

function startPainting() {
    painting = true;
}

function onMouseDown(event) {
    painting = true;
}



if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}