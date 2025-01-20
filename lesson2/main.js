// // console.log("Hello")

// // const aObj = {
// // 	name: "Adilet",
// // 	age: 12
// // }

// // const bObj = JSON.parse(JSON.stringify(aObj))

// // bObj.text = "tex"

// // // delete bObj.text

// // console.log(aObj);
// // console.log(bObj);


// // let num = 10

// // if (num > 11) {
// // 	console.log("hello");
// // } else if (num > 10) {
// // 	console.log("f");
// // } else {
// // 	console.log('hello2');
// // }


// // switch (num) {
// // 	case 10:
// // 		if (num === 10) {
// // 			console.log('hello');
// // 			break
// // 		}
// // 		console.log("hi");
// // 	case 12:
// // 		console.log("12");
// // 	default:
// // 		console.log("none");
// // }


// // let num = 0;

// // console.log(num);
// // num++

// // console.log(num);
// // num++

// // console.log(num);
// // num++

// // console.log(num);
// // num++

// // console.log(num);
// // num++

// // const arr = ["Talgat", "Adilet", 'Rinat', "Arlen"]

// // for (let i = 0; i < arr.length; i++) {
// // 	console.log(arr[i]);
// // }

// // console.log(arr[0]);
// // console.log(arr[1]);
// // console.log(arr[2]);
// // console.log(arr[3]);


// // for
// // for (let i = 0; i < 10; i++) {
// // 	console.log(i);
// // 	if (i == 9) {
// // 		for (let j = 10; j >= 0; j--) {
// // 			console.log(j);
// // 		}
// // 	}
// // }

// // const arr = ["Talgat", "Adilet", 'Rinat', "Arlen"]

// // for (let i = 0; i < arr.length; i++) {
// // 	console.log(arr[i]);
// // }

// // const user = {
// // 	age: 18,
// // 	title: "Luke",
// // 	height: "190",
// // 	see: true
// // }

// // console.log(`test ${user["title"]}`);



// //for of

// // for (const [key, value] of Object.entries(user)) {
// // 	console.log(`${key}: ${value}`);
// // }


// //for in

// // for (const key in user) {
// // 	console.log(`${key}: ${user[key]}`);
// // }

// // while

// // const arr = ["Talgat", "Adilet", 'Rinat', "Arlen"]

// // let i = 0

// // while (i > arr.length) {
// // 	console.log(arr[i]);
// // 	i++
// // }

// // do while

// // const arr = ["Talgat", "Adilet", 'Rinat', "Arlen"]

// // let i = 0

// // do {
// // 	console.log(arr[i]);
// // 	i++
// // } while (i > arr.length);

// // if (4==0) {
// // 	console.log(0);
// // } else if (4 == 4) {
// // 	console.log(4);
// // } else {
// // 	console.log("else");
// // }

// 1) Задача "Треугольник в цикле": Напишите цикл, который за 7 вызовов console.log выводит такой треугольник: 
// * 
// ** 
// *** 
// **** и так далее 
 
// 2) Задача "FizzBuzz": напишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключениями. Для чисел, нацело делящихся на 3, она должна выводить ‘Fizz’, а для чисел, делящихся на 5 (но не на 3) – ‘Buzz’. 
// Когда сумеете – исправьте её так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на 3, и на 5. 
 
// 3) Задача "Шахматная доска": напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо #. В результате должна получиться шахматная доска. Когда справитесь, сделайте размер доски переменным, чтобы можно было создавать доски любого размера. 
// Пример:  
// * * * *  
//  * * * * 
// и так далее