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
if (!isNaN(input)) {
  printOdds(input);
}

//Exe2

function checkAge(age, name) {
  let ofAgeMsg = `Congrats ${name}, you are old enough to drive`;
  let underAgeMsg = `Sorry ${name}, you aren't old enough to drive`;

  if (age >= 16) {
    console.log(ofAgeMsg);
  } else {
    console.log(underAgeMsg);
  }
}

let name = prompt("What is your name?");
let age = parseInt(prompt("What is your age?"));

if (!isNaN(age)) {
  checkAge(age, name);
}
if (isNaN(age)) {
    console.log("That isn't an age!")
}

//Exe3

const determinePosition = (x, y) => {
  if (x > 0 && y > 0) {
    return "Q1";
  } else if (x < 0 && y > 0) {
    return "Q2";
  } else if (x < 0 && y < 0) {
    return "Q3";
  } else if (x > 0 && y < 0) {
    return "Q4";
  } else if (x == 0 && y != 0) {
    return "x axis";
  }
};

//Exe4

const isValidTriangle = (a, b, c) => {
    return a + b > c && a + c > b && b + c > a;
}

const determinTriangle = (a, b, c) => {
    let isValid = isValidTriangle(a, b, c);

    if (isValid) {
        if (a == b && b == c) {
            return `Equilateral`;
        }
    }
}