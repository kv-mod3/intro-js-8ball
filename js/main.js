// global variables
const enterBtn = document.querySelector('button');
const eightBall = document.getElementById('imgBall');

// img array
const imgArray = [
    './img/magic8ball_start.png',
    './img/magic8ball_1.png',
    './img/magic8ball_2.png',
    './img/magic8ball_3.png',
    './img/magic8ball_4.png',
    './img/magic8ball_5.png',
    './img/magic8ball_6.png',
    './img/magic8ball_7.png',
    './img/magic8ball_8.png',
    './img/magic8ball_9.png',
    './img/magic8ball_10.png',
    './img/magic8ball_11.png',
    './img/magic8ball_12.png',
    './img/magic8ball_12.png',
    './img/magic8ball_13.png',
    './img/magic8ball_14.png',
    './img/magic8ball_15.png',
    './img/magic8ball_16.png',
    './img/magic8ball_17.png',
    './img/magic8ball_18.png',
    './img/magic8ball_19.png',
    './img/magic8ball_20.png',
];

// display 8ball with default values
eightBall.src = imgArray[0];    // img path related to where JS is running (html), not the JS file itself
eightBall.style.width = '425px';
eightBall.style.height = '425px';


// generates a random integer
function randomInt(min, max) { // passes min and max integers into the function
    return Math.floor(Math.random() * (max - min + 1) + min)
    // Math.random explained from MDN Web Docs
};

// execution if button is clicked
enterBtn.addEventListener('click', function () {
    let inputBox = document.querySelector('input');
    if (inputBox.value.length < 1) {
        alert("Please enter in a question!");
    } else {
        changeImg()
        inputBox.value = '';
    };
});

// changing <img> in <div>
function changeImg() {
    roundedInt = randomInt(1, 20);
    eightBall.src = imgArray[roundedInt];

    console.log('randomInt: ' + roundedInt);
    console.log(imgArray[roundedInt]);
};

console.log(document.getElementById('answers'));