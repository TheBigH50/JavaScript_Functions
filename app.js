console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

//Exe1

function printOdds(count) {
    for (let m = 0; m <= count; m++) {
if (m % 2 != 0) {
    console.log(`${m} Odd`);
}
}
}

let input = parseInt(prompt("input a number"));
if(!isNaN(input)){
printOdds(input);
}