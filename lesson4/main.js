// const arr = [1, 2, 43, 5, 34, 5];

// //map
// "1253"[(1, 2, 5, 3)];
// // const f = arr.findIndex((el) => el === 34);

// // console.log(f);

// // arr.pop
// // arr.shift
// // arr.push
// // arr.unshift

// // console.log(arr);

// // Метод pop() удаляет последний элемент из массива и возвращает его значение.
// // const a = arr.pop();

// // Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.
// // const a = arr.shift();

// // arr.push(100);
// // arr.unshift(99);

// // console.log(arr);

// //filter

// console.log(arr);

// // const filter = arr.filter((el) => el > 10);

// // const total = arr.reduce((acc, curr) => acc + curr, 0);

// // const join = arr
// //   .join(" ")
// //   .split(" ")
// //   .map((el) => Number(`${el}0`));

// const splice = arr.splice(0, 2).join("");
// console.log(splice);

// // arr.splice(2, 0, 100);
// // const boys = ["Peter", "Alex", "John", "Arthur", "Richard"];
// // const girls = ["Kate", "Liza", "Kira", "Emma", "Trisha"];
// // const array3 = boys.concat(girls);

// // console.log(array3);
// // Expected output: Array ["a", "b", "c", "d", "e", "f"]

// // const sort = arr.sort((a, b) => b - a);

// console.log(arr);

function century(year) {
  const str = year.toString();

  if (str.length === 2) {
    return 1;
  }

  if (str.length === 3) {
    const num = str.split("").splice(0, 1).join("");
    const numYear = Number(num + "00");

    if (numYear < year) {
      const totalNum = Number(num) + 1;
      return totalNum;
    } else {
      return num;
    }
  }

  const num = str.split("").splice(0, 2).join("");
  const numYear = Number(num + "00");

  //num "19"
  //numYear 1900

  if (numYear < year) {
    const totalNum = Number(num) + 1;
    return totalNum;
  } else {
    return num;
  }
}

Math.floor(1.1);
Math.round(1.1);

console.log(Math.ceil(1.1));
console.log(Math.floor(1.1));
console.log(Math.round(1.1));
