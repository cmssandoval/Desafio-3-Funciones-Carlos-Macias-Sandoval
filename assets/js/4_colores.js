const   box1 = document.getElementById("box1"),
        box2 = document.getElementById("box2"),
        box3 = document.getElementById("box3"),
        box4 = document.getElementById("box4");

function cambiarColor(event) {
    event.target.style.backgroundColor = "black";
}

box1.addEventListener("click", cambiarColor);
box2.addEventListener("click", cambiarColor);
box3.addEventListener("click", cambiarColor);
box4.addEventListener("click", cambiarColor);