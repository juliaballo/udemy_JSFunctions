//exercise 35
// Write your function here:
function printHeart () {
    console.log("<3");
}

printHeart();

//exercise 36
// DEFINE YOUR FUNCTION:
function rant (message) {
    for(let i = 0; i < 3; i++) {
        console.log(message.toUpperCase());
    }
}

//exercise 37
// define isSnakeEyes below:
const isSnakeEyes = (num1, num2) => {
    if(num1 === 1 & num2 === 1) {
        console.log("Snake Eyes!");
    } else {
        console.log("Not Snake Eyes!");
    }
}

//exercise 38
// DEFINE YOUR FUNCTION BELOW:
const multiply = (num1, num2) => {return num1 * num2};

//exercise 39
// DEFINE YOUR FUNCTION BELOW:
const isShortsWeather = temperature => {return temperature >= 75 ? true : false};
