"use strict";

/*
* Завдання:


//1. Перевірка на парність числа. Напишіть функцію isEven,
// яка приймає число, яке вводить користувач,
// в якості аргументу і повертає проміс,
// яка поверне "Це парне число", якщо число парне (resolve),
// і "Помилка, число не парне", якщо число непарне (reject).

/*function isEven(number) {
	return new Promise((resolve, reject) => {
		number % 2 === 0 ? resolve('Це парне число') : reject("Помилка, число не парне")
	})
}

isEven(+prompt("Input number"))
	.then(data => console.log(data))
	.catch(err => console.log(err))*/

//2. Випадкова затримка. Напишіть функцію,
// яка повертає проміс з випадковою затримкою від 1 до 5 секунд.

/*function randomNumber(min, max) { // min and max included
	return (Math.floor(Math.random() * (max - min + 1) + min)) * 1000
}

function isEven(number) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			number % 2 === 0 ? resolve('Це парне число') : reject("Помилка, число не парне")
		}, randomNumber(1, 5))
	})
}

isEven(+prompt("Input number"))
	.then(data => console.log(data))
	.catch(err => console.log(err))*/

//3. Виконання промісу з ймовірністю успіху.
// Напишіть функцію, яка повертає проміс,
// яка має вказану ймовірність успішного виконання (наприклад, 70%).
// Успішне виконання повинно повертати "Успіх", а невдачу - "Помилка".


/*const promise = new Promise((resolve, reject) => {
	successRate(0, 100) > 30 ? resolve("Success") : reject("Error")
})
promise.then(data => console.log(data)).catch(err => console.log(err))*/

/*
function successRate(min, max) { // min and max included
	return Math.floor(Math.random() * (max - min + 1) + min)
}

function randomSuccessPromise() {
	return new Promise((resolve, reject) => {
		successRate(0, 100) > 30 ? resolve("Success") : reject("Error")
	})
}

let successRateResult = 0
for (let i = 0; i < 100; i++) {
	randomSuccessPromise()
		.then(() => successRateResult++)
		.catch(err => console.log(err))
		.finally(() => console.log(successRateResult / 100))
}*/


//4.* Виконання послідовних операцій. Напишіть послідовність з чотирьох промісів,
// де перший повертає випадкове число від 1 до 100, другий множить його на 10,
// третій перетворює результат в масив чисел,
// а четвертий сортує числа по зростанню. 87 -> 870 -> [8, 7, 0] -> [0, 7, 8].
// Затримка кожного промісу має бути більше на 1с за затримку минулого
// і на кожному етапі має виводитись в консоль проміжний результат.

/*function rngNumber(min, max) { // min and max included
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const promise = new Promise((resolve, reject) => {
	console.log('Starting...')
	setTimeout(() => {
		resolve(rngNumber(1, 100))
	}, 1000)
}).then(data => {
	console.log(`Data: ${data}`)
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data * 10)
		}, 2000)
	})
}).then(data => {
	console.log(`Data: ${data}`)
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data.toString().split('').map(Number))
		}, 3000)
	})
}).then(data => {
	console.log(`Data: ${data}`)
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(data.sort())
		}, 4000)
	})
}).then(data => {
	console.log(`Data: ${data}`)
})*/

//5. Завдання зі статті: https://uk.javascript.info/promise-basics*/
//5.1
/*let promise = new Promise(function(resolve, reject) {
	resolve(1);

	setTimeout(() => resolve(2), 1000);
});

promise.then(alert);*/

//5.2
/*function delay(ms) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve()
		}, ms)
	})
}

delay(3000).then(() => alert('виконалось через 3 секунди'));*/

//5.3


function drawCircle(cx, cy, radius) {


	return new Promise(resolve => {
		const circle = document.createElement('div')
		circle.classList.add(`circle`)

		circle.style.left = `${cx}px`
		circle.style.top = `${cy}px`

		document.body.append(circle)

		setTimeout(() => {
			circle.style.width = `${radius * 2}px`
			circle.style.height = `${radius * 2}px`

		}, 0)
		setTimeout(() => {
			resolve(circle)
		}, 2000)
	}).then((circle) => {
		circle.textContent = "Hello World!!!"
	})
}













