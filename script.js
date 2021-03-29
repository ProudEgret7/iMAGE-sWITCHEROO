var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 1;
    canvas.addEventListener("mousedown", my_mousedown);
    function my_mousedown(e)
    {

        mouseEvent = "mouseDown";
    }


    canvas.addEventListener("mousemove", my_mousemove);
    function my_mousemove(e)
    {
        current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
        current_position_of_mouse_y = e.clientY - canvas.offsetTop;

        if (mouseEvent == "mouseDown") {
   ctx.beginPath();
    ctx.beginPath();
   ctx.strokeStyle = 'silver';
   ctx.lineWidth = 5;
    ctx.rect(190, 180, 430, 200);
    ctx.stroke();      
          
   ctx.beginPath();
   ctx.strokeStyle = 'blue';
   ctx.lineWidth = 5;
ctx.arc(300, 255, 45, 0, 2 * Math.PI);
ctx.stroke();
          
          ctx.beginPath();
   ctx.strokeStyle = 'black';
   ctx.lineWidth = 5;
ctx.arc(400, 255, 45, 0, 2 * Math.PI);
ctx.stroke();
          
          ctx.beginPath();
   ctx.strokeStyle = 'red';
   ctx.lineWidth = 5;
ctx.arc(500, 255, 45, 0, 2 * Math.PI);
ctx.stroke();
          
          ctx.beginPath();
   ctx.strokeStyle = 'green';
   ctx.lineWidth = 5;
ctx.arc(350, 300, 45, 0, 2 * Math.PI);
ctx.stroke();
          
           ctx.beginPath();
   ctx.strokeStyle = 'yellow';
   ctx.lineWidth = 5;
ctx.arc(450, 300, 45, 0, 2 * Math.PI);
ctx.stroke();
        }

last_position_of_x = current_position_of_mouse_x; 
last_position_of_y = current_position_of_mouse_y;
    }

    canvas.addEventListener("mouseup", my_mouseup);
    function my_mouseup(e)
    {
        mouseEvent = "mouseUP";
    }

    canvas.addEventListener("mouseleave", my_mouseleave);
    function my_mouseleave(e)
    {
        mouseEvent = "mouseleave";
    }

//Additional Activity
function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}