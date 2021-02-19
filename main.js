var mouseEvent = "empty";
var Last_position_of_X, Last_position_of_Y;


canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "aqua";
width_of_Line=1;


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
    color = document.getElementById("color").value;
    width_of_Line = document.getElementById("width_of_Line").value;
    
    mouseEvent = "mousedown";

}

canvas.addEventListener("mousemove", my_mouseMove);
function my_mouseMove(e) {
    current_pos_X = e.clientX - canvas.offsetLeft;
    current_pos_Y = e.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_Line;
        ctx.arc(current_pos_X, current_pos_Y,40,0, 2 * Math.PI);
       
        ctx.stroke();
    }

    Last_position_of_X = current_pos_X;
    Last_position_of_Y = current_pos_Y;




}

canvas.addEventListener("mouseup", my_mouseUp);
function my_mouseUp(e) {
    mouseEvent = "mouseup"
}
canvas.addEventListener("mouseleave", my_mouseLeave);
function my_mouseLeave(e) {
    mouseEvent = "mouseleave"
}





function cleararea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}