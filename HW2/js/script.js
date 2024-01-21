'use strict'
// 1
let variable = 123;
console.log(variable);
console.log(`${typeof variable} = ${variable}`);

let stringVariable = String(variable);
// console.log(variable.toString());
// console.log(variable + '');
console.log(stringVariable);
console.log(`${typeof stringVariable} = ${stringVariable}`);

let nubmerVariable = +variable;
console.log(nubmerVariable);
console.log(`${typeof nubmerVariable} = ${nubmerVariable}`);

let booleanVariable = !!variable;
console.log(variable.toString());
console.log(booleanVariable);
console.log(`${typeof booleanVariable} = ${booleanVariable}`);


// 2 Конвертор валют

let rate = 24;
let customerUahAmount = prompt ('Скільки UAH хочете обмінати на USD?');
console.log(`Ви отримаєте ${Math.round((customerUahAmount / rate) * 100) / 100} USD`);


// 3 Обчислення вартості бензину

let fuelAmount = prompt ('how much fuel do you want?');
let fuelPrice = prompt ('enter price for 1L Fuel', 'lets be realistic');
alert(`Треба заплатити ${Math.round((fuelAmount * fuelPrice) * 100) / 100} UAH`);


// 4

let a = Math.round(Math.random()*100); // може бути будь-яке інше ціле додатнє число
let b = Math.round(Math.random()*100); // може бути будь-яке інше ціле додатнє число

let binaryResult = (a + b).toString(2);
console.log(binaryResult);
console.log(typeof binaryResult);
