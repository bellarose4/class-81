var x=document.getElementById("can");
var ctx=x.getContext("2d");
color ="blue";
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=2;
ctx.arc(150,140,40,0,2*Math.PI);
ctx.stroke();
x.addEventListener("mousedown",drawcircle);
function drawcircle(e){
    drawcolorcircle = document.getElementById("colorinput").value;
console.log(drawcolorcircle);
    xmouse=e.clientX-x.offsetLeft;
    ymouse=e.clientY-x.offsetTop;
    console.log("X =" + xmouse + " , Y = " + ymouse);
    circle(xmouse,ymouse);
}
function circle(xmouse,ymouse){
    ctx.beginPath();
    ctx.strokeStyle=drawcolorcircle;
    ctx.lineWidth=2;
    ctx.arc(xmouse,ymouse,40,0,2*Math.PI);
    ctx.stroke();    
}
button1 = document.getElementById("buttonclick");
button1.addEventListener("click", clear);
function clear()
{
console.log("I am Button");
document.getElementById("buttonclick").innerText = "Clicked";
ctx.clearRect(0, 0, x.width, x.height);
}