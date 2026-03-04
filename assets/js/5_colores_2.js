const key = document.getElementById('key');

const pintarDiv = (color) => {
    key.style.backgroundColor = color;
};

document.addEventListener('keydown', function (event) {
    if (event.key === 'a' || event.key === 'A') {
        pintarDiv('pink');
    } else if (event.key === 's' || event.key === 'S') {
        pintarDiv('orange');
    } else if (event.key === 'd' || event.key === 'D') {
        pintarDiv('skyblue');
    }
});

function agregarDiv(color) {
    let body = document.querySelector('body'),
        nuevoDiv = document.createElement('div');
        
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.border = '2px solid black';
    nuevoDiv.style.backgroundColor = color;
    body.appendChild(nuevoDiv);
}

document.addEventListener("keydown", function(event){
    if (event.key === "q" || event.key === "Q") {
        agregarDiv('purple');
    } else if (event.key === "w" || event.key === "W") {
        agregarDiv('gray');
    } else if (event.key === "e" || event.key === "E") {
        agregarDiv('brown');
    }
});
