let num1 = prompt("Введіть перше число:");
let num2 = prompt("Введіть друге число:");
let num3 = prompt("Введіть третє число:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

if (num1 >= num2 && num1 >= num3) {
    console.log("Найбільше число: " + num1);
} else if (num2 >= num1 && num2 >= num3) {
    console.log("Найбільше число: " + num2);
} else {
    console.log("Найбільше число: " + num3);
}

let month = prompt("Введіть номер місяця (від 1 до 12):");
month = parseInt(month);

if (month >= 3 && month <= 5) {
    console.log("Це весна.");
} else if (month >= 6 && month <= 8) {
    console.log("Це літо.");
} else if (month >= 9 && month <= 11) {
    console.log("Це осінь.");
} else if (month === 12 || month === 1 || month === 2) {
    console.log("Це зима.");
} else {
    console.log("Неправильний номер місяця.");
}

let number = prompt("Введіть число:");
number = parseFloat(number);

if (number > 0) {
    console.log("Число додатнє.");
} else if (number < 0) {
    console.log("Число від'ємне.");
} else {
    console.log("Число дорівнює нулю.");
}

let angle = prompt("Введіть величину кута в градусах:");
angle = parseFloat(angle);

let angleType = (angle < 90) ? "Кут гострий." : "Кут тупий.";
console.log(angleType);

let score = prompt("Введіть свою оцінку за тест (від 0 до 100):");
score = parseInt(score);

let gradeBeforeIncrement;

if (score >= 90 && score <= 100) {
    gradeBeforeIncrement = "A";
} else if (score >= 80 && score <= 89) {
    gradeBeforeIncrement = "B";
} else if (score >= 70 && score <= 79) {
    gradeBeforeIncrement = "C";
} else if (score >= 60 && score <= 69) {
    gradeBeforeIncrement = "D";
} else {
    gradeBeforeIncrement = "F";
}

console.log("Оцінка до інкремента: " + gradeBeforeIncrement);

score++;

let gradeAfterIncrement;

if (score >= 90 && score <= 100) {
    gradeAfterIncrement = "A";
} else if (score >= 80 && score <= 89) {
    gradeAfterIncrement = "B";
} else if (score >= 70 && score <= 79) {
    gradeAfterIncrement = "C";
} else if (score >= 60 && score <= 69) {
    gradeAfterIncrement = "D";
} else {
    gradeAfterIncrement = "F";
}

console.log("Оцінка після інкремента: " + gradeAfterIncrement);

let isPassed = score >= 60 ? "Студент зарахований." : "Студент не зарахований.";
console.log(isPassed);
