const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Selectors
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Event listeners
btn.addEventListener('click',function(){
    const newColor = generateColor();
    document.body.style.backgroundColor = newColor;
    color.textContent = newColor;
})

// Functions
function generateColor() {
    // Need an array with 6 positions. Generate a value for each position. The resulting array is a color. Turn array into a string and return it.
    let color = [];
    for(let i = 0; i<6; i++) {
        min = 0;
        max = hex.length;
        let hexIndex = Math.floor(Math.random()*(max-min)+min);
        console.log(hex[hexIndex]);
        color.push(hex[hexIndex]);
    }
    stringColor = '#' + color.join('');
    console.log(stringColor);
    return stringColor;
}