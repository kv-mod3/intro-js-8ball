// global variables
const eightBall = document.createElement('img');


// creating 8-ball
document.body.appendChild(eightBall);
eightBall.style.height = '500px';
eightBall.style.width = '500px';
eightBall.src = './img/magic8ball_start.png';    // img path related to where JS is running (html), not the JS file itself

// grabs a random integer
function randomInt(min, max) { // min and max integers
    return Math.floor(Math.random() * (max - min + 1) + min)
    // from MDN Web Docs
}

const roundedInt = randomInt(1, 20) // passes min and max integers into the function
console.log(roundedInt)