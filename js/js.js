var nav_butt= document.getElementById("nav-click");
nav_butt.addEventListener("click",()=>{
document.querySelector("ul").classList.toggle("ul");
});

var a= document.getElementsByClassName("f");
var b= document.getElementsByClassName("j");


if (screen.width>"767"){
for (var i = 0; i < a.length; i++) {
a[i].onclick=function(){
for (var i = 0; i < a.length; i++) {
a[i].classList.remove("ja");
}   
this.classList.toggle("ja");
}                   
}
window.addEventListener("load", ()=>{
for (var i = 0; i < b.length; i++) {
b[i].onclick = function(){
for (var i = 0; i < b.length; i++) {
b[i].classList.remove("sm");
}   
this.classList.toggle("sm");
}                   
}
});  
}










      




