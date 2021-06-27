const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

// Selectors
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Even listeners
btn.addEventListener('click',function() { // an anonymous function
    // Getting a random element from colors array
    colorIndex = getRandomIndex();
    document.body.style.backgroundColor = colors[colorIndex];
    color.textContent = colors[colorIndex];
});

// Functions
function getRandomIndex() {
    min = 0;
    max = colors.length;
    return Math.floor((Math.random() * (max-min) + min)); 
}