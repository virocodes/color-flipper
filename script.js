const changeColor = (color) => {
    document.body.style.backgroundColor = color;
}

const randomColor = () => {
    let red = Math.floor(Math.random() * 255) + 1;
    let green = Math.floor(Math.random() * 255) + 1;
    let blue = Math.floor(Math.random() * 255) + 1;
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');
const random = document.getElementById('random');

red.addEventListener('click', () => {
    changeColor('red');
    green.style.border = "none";
    blue.style.border = "none";
    random.style.border = "none";
    red.style.border = "2px solid white";
})

green.addEventListener('click', () => {
    changeColor('green');
    red.style.border = "none";
    blue.style.border = "none";
    random.style.border = "none";
    green.style.border = "2px solid white";
})

blue.addEventListener('click', () => {
    changeColor('blue');
    green.style.border = "none";
    red.style.border = "none";
    random.style.border = "none";
    blue.style.border = "2px solid white";
})

random.addEventListener('click', () => {
    changeColor(randomColor());
    green.style.border = "none";
    blue.style.border = "none";
    red.style.border = "none";
    random.style.border = "2px solid white";
})