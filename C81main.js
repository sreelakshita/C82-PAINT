mouseEvent="empty";
var lpx,lpy;
canvas = document.getElementById("mycanvas");
 cty=canvas.getContext("2d");

color= "pink";
width =3;
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvent="mouseUp";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent="mouseLeave";
}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
  cpx=e.clientX - canvas.offsetLeft;
  cpy=e.clientY - canvas.offsetTop;

  if(mouseEvent=="mouseDown")
  cty.beginPath();
  cty.strokeStyle=color;
  cty.lineWidth=width;
  cty.moveTo (lpx,lpy);
  cty.lineTo(cpx,cpy)
  cty.stroke() ;

}