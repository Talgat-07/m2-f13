// console.log(Boolean(0));
// console.log(Boolean(""));

// let data
// console.log(typeof data !== "undefined");

// console.log(4 / 2 === 2 && 4 / 2 === 1);
// console.log(4 / 2 === 2 || 4 / 2 === 1);

// function hello() {
//   const a = 1;
//   const b = 2;
//   console.log(a + b);
// }

// hello();

// {
//   const num = 1;
//   console.log(num);
//   {
//     const num = 2;
//     console.log(num);
//   }
// }
// console.log(num);

// Description
// isName();

// function isName() {
//   const name = "user name";
//   console.log(name);
// }

// isName();
// isName();

// function expression

// const isAge = function () {
//   const age = "user age 18";
//   console.log(age);
// };

// isAge();

// arrow func
// const color = (color, number) => { //param
//   console.log(color, number);
// };

// color("green", 55);//arg
// color("red", 11);

// function increment(a = 1, b = 1) {
//   if (typeof a === "number" && typeof b === "number") {
//     console.log(a + b);
//   } else {
//     console.log("параметры на число");
//   }
// }

// increment(undefined, 50); //20
// increment(10, 20); //30

// function back(num1, num2) {
//   const a = num1;
//   const b = num2;
//   if (typeof num1 === "number") {
//     console.log("num");
//     return "app"
//   }
//   console.log("world");
//   return a + b;
//   console.log("hello");
// }

// const result = back(5, 2);

// console.log(result);

//замыкание
// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const counter = createCounter();
// console.log(counter());
// console.log(counter());

// setTimeout(function () {
//   console.log("через 2 секунды это сообщение появится.");
// }, 2000);

// setInterval(() => {
//   console.log("int 2s");
// }, 2000);

// коллбек

// function logData(callback) {
//   // setInterval(() => {
//   //   const data = new Date();
//   //   callback(data);
//   // }, 2000);
//   console.log(1);
//   callback("c 2");
//   console.log(3);
//   callback("c 4");
//   console.log(5);
//   callback("c 6");
// }
// logData(function (data) {
//   console.log(data);
// });
