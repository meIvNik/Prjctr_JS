"use strict";

// 1
console.log("Задача №1:");
let customerNumber;
customerNumber = prompt("Enter any number");
if (isNaN(customerNumber)) {
  alert("Error");
  console.log("Enter NUMBER to continue");
}
for (let i = 2; i < customerNumber; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//спробував вивести ці ж числа в іншу сторону
if (!isNaN(customerNumber)) {
  console.log("А тепер в зворотній бік:");
}

for (let i = customerNumber - 1; i > 0; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
if (!isNaN(customerNumber)) {
  console.log("А тепер While:");
}

let i = 2;
while (i < customerNumber) {
  if (i % 2 === 0) {
    console.log(i);
  }
  i++;
}

// 2
console.log("Задача №2:");
for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    //я б лишив такий варіант, ніби детальніше пояснює здачу:) "(i % 5 === 0 && i % 3 === 0)""
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// додаткову задачу спробую зробити пізніше
console.log("Задача №3:");
let string = "42559125";
let result = "";

for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
  if (string[i] < 5) {
    result += 0;
  } else if (string[i] >= 5) {
    result += 1;
  }
}
console.log(result);
