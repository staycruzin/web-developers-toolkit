let carArray = ["ferarri", "merc", "landy", "nissan"];

function myGarrage (inputArray) {
    let output = "In my garrage I have ";
    for(let i =0; i<inputArray.length; i++) {
        //console.log(inputArray[i]);
        output += inputArray[i] + ", ";
    }
    return output;
}

console.log(myGarrage(carArray));


let numbersArray = [25, 56, 76, 21, 10];

function sumUp (inputArray) {
    let output = 0;
    for(let i =0; i<inputArray.length; i++) {
        //console.log(inputArray[i]);
        output += inputArray[i];
    }
    return output;
}

console.log(sumUp(numbersArray));


let multiplyArray = [5, 7, 6, 12, 10];

function multiply (inputArray) {
    let output = 1;
    for(let i =0; i<inputArray.length; i++) {
        //console.log(inputArray[i]);
        output *= inputArray[i];
    }
    return output;
}

console.log(multiply(multiplyArray));
