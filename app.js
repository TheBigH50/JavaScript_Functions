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

let namer = prompt("What is your name?");
let ager = parseInt(prompt("What is your age?"));

if (!isNaN(ager)) {
  checkAge(ager, namer);
}
if (isNaN(ager)) {
  console.log("That isn't an age!");
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

let xAxis = parseInt(prompt("Enter X coordinate"));
let yAxis = parseInt(prompt("Enter y coordinate"));
console.log(determinePosition(xAxis, yAxis));
//Exe4

function isValidTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

const determineTriangle = (a, b, c) => {
  let isValid = isValidTriangle(a, b, c);

  if (isValid) {
    if (a == b && b == c) {
      return `Equilateral`;
    } else if (a == b && b != c) {
      return `Isosceles`;
    } else if (a != b && b != c) {
      return `Scalene`;
    }
  }
};

let side1 = parseInt(prompt("Enter side one"));
let side2 = parseInt(prompt("Enter side two"));
let side3 = parseInt(prompt("Enter side three"));
console.log(determineTriangle(side1, side2, side3));

//Exe5

const getRoundedNumber = (num) => {
  return parseFloat(num.toFixed(3));
};
const getAvg = (total, length) => {
  return getRoundedNumber(total/length);
}

const getUsageFeedback = (planLimit, days, usage) => {
  const cycleLength = 30;
  const projectedAvg = getAvg(planLimit, cycleLength);
  const currentAvg = getAvg(usage, days);
  const projectedUsage = getRoundedNumber(currentAvg) * getRoundedNumber(cycleLength);
  const adjustedAvg = getAvg(planLimit - usage, cycleLength - days);

  let output = `${days} days used, ${cycleLength - days} days remaining
  Suggested daily use: ${projectedAvg} GB/day
  `;

  if (currentAvg > projectedAvg) {
    output += `You are EXCEEDING your average daily use (${currentAvg} GB/day),
continuing this high usage, you will exceed your data plan by
${projectedUsage - planLimit} GB.  To stay below your data plan,
use no more than ${adjustedAvg} GB/day`;
  } else if (currentAvg < projectedAvg) {
    output += `You are going to leave un-used data behind,
    you do not have a roll over plan!  At your current usage rate,
    you will leave ${Math.abs(projectedUsage - planLimit)} GB behind!
    To use all of your data plan, use on average ${adjustedAvg} GB/day`;
  } else {
    output += `You are right on track, keep up the good work, your average daily use of
  ${currentAvg} GB/day is spot on for your current plan.`;
  }
  console.log(output);
};

let dataAllowance = parseInt(prompt("Enter GB data cap"));
let daysIn = parseInt(prompt("Enter how many days into current billing cycle you are"));
let gbUsed = parseInt(prompt("Enter how many GB of data you have used"));
getUsageFeedback(dataAllowance, daysIn, gbUsed);