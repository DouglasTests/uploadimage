document.addEventListener('mousemove', eyeball);
function eyeball(){
    var eye = document.querySelectorAll('.eye');
    eye.forEach(function(eye){
        let x = (eye.getBoundingClientRect()
        .left) + (eye.clientWidth / 2);
        let y = (eye.getBoundingClientRect()
        .top) + (eye.clientHeight / 2);
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = (radian * (180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate("+ rot +"deg)";
    })
}

var selector = document.querySelector(".areabottom").style;
function undoclick()
{ 
  
    selector.backgroundColor = "rgba(0, 8, 8, 0.774)";
    selector.width = "180px";
    selector.borderRadius = "15px";
}
function redoclick()
{
    
    selector.backgroundColor = "";
    selector.width = "";
    selector.borderRadius = "";
    selector.height = "";
}
function leaveclick(){
    selector.backgroundColor = "";
    selector.width = "";
    selector.borderRadius = "";
    selector.height = "";
}
