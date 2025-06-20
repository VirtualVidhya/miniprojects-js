let btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let randColor = getRandomColor();

    document.querySelector('h3').innerText = randColor;
    document.querySelector('div').style.backgroundColor = randColor;
});

function getRandomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
}