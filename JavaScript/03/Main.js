// 1. Логічні оператори порівняння та alert:
let number1 = 5;
let number2 = 5;

if (number1 === number2) {
    alert("Числа рівні");
} else {
    alert("Числа не рівні");
}

// 2. Метод вводу інформації та логічні порівняння:
let userNumber = prompt("Введіть число:");
userNumber = parseInt(userNumber);

if (userNumber % 2 === 0) {
    console.log("Число парне");
} else {
    console.log("Число непарне");
}

// 3. Логічні порівняння та введення-виведення:
let age = prompt("Введіть свій вік:");
age = parseInt(age);

if (age < 18) {
    alert("Вам заборонено використовувати цей ресурс.");
} else {
    alert("Ви можете використовувати цей ресурс.");
}

// 4. Розрахунок вартості товару та console.log:
let price = prompt("Введіть ціну товару:");
let quantity = prompt("Введіть кількість товару:");
price = parseFloat(price);
quantity = parseInt(quantity);

let totalCost = price * quantity;
console.log("Загальна вартість товару: " + totalCost);

// 5. Розрахунок знижки на товар та alert:
let productPrice = prompt("Введіть вартість товару:");
productPrice = parseFloat(productPrice);

let discount = productPrice * 0.50;
alert("Сума знижки: " + discount);
