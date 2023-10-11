var lienzo=document.getElementById("canvas")
var lapiz=lienzo.getContext("2d")
var mouseX=0
var mouseY=0
lapiz.strokeStyle="cyan"
lapiz.lineWidth=20
lapiz.beginPath()
lapiz.arc(300,250,100,0,2*Math.PI)
lapiz.stroke()

lienzo.addEventListener("mousedown",dibujo_dinamico)

function dibujo_dinamico(click){
mouseX=click.clientX-canvas.offsetLeft;
mouseY=click.clientY-canvas.offsetTop;
lapiz.strokeStyle=document.getElementById("color").value
lapiz.lineWidth=20
lapiz.beginPath()
lapiz.arc(mouseX,mouseY,100,0,2*Math.PI)
lapiz.stroke()
}
function Limpiar(){
lapiz.clearRect(0,0,600,500)



}
