// FullScreen the Browser
window.addEventListener("DOMContentLoaded", (event)=>{
    const button = document.getElementById("btn");
    button.addEventListener("click", ()=>{
        if ((window.fullScreen) ||(window.innerWidth == screen.width && window.innerHeight == screen.height)){
            document.exitFullscreen();
            button.innerHTML = 'Full Screen';
        }
        else{
            document.body.requestFullscreen();
            button.innerHTML = 'Exit Full Screen';
        }
    });

});

const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 5;
// ctx.globalCompositeOperation = 'multiply';

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;

function draw(e){
    if(!isDrawing)
        return;
    ctx.strokeStyle = `hsl(${hue},100%, 50%)`;
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX,lastY);
    // got o
    ctx.lineTo(e.offsetX,e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if(hue >= 360){
        hue = 0;
    }
}

canvas.addEventListener('mousedown',(e)=> {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=> isDrawing = false);
canvas.addEventListener('mouseout',()=> isDrawing = false);

canvas.addEventListener('pointerdown',(e)=> {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('pointermove',draw);
canvas.addEventListener('pointerout',()=> isDrawing = false);
canvas.addEventListener('pointerup',()=> isDrawing = false);