// const user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// console.log(user);

// class User {
//   constructor(name, age, isAdmin) {
//     this.name = name;
//     this.age = age;
//     this.isAdmin = isAdmin;
//   }

//   hello() {
//     return `Hello ${this.name}`;
//   }
// }

// const user = new User("John", 30, true);
// const user2 = new User("Alex", 18, false);
// console.log(user);
// console.log(user2);
// console.log(user.hello());
// console.log(user2.hello());

// Инкапсуляция

// class People {
//   static #password = "1234";
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   get password() {
//     return People.#password;
//   }

//   set password(newPassword) {
//     People.#password = newPassword;
//   }
// }

// const user = new People("John", 30);
// console.log(user.password);
// user.password = "123456";
// console.log(user.password);

// Абстракция и Наследование

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Student extends Person {
//   constructor(name, age) {
//     super(name, age);
//     this.curse = "Frontend";
//   }
// }

// const user = new Person("John", 30);
// console.log(user);
// const student = new Student("Alex", 18);
// console.log(student);

// class Teacher {
//   constructor() {
//     this.name = "Maria";
//     this.age = 26;
//     this.algebra = true;
//   }
// }
// class Teacher2 extends Teacher {
//   constructor() {
//     super();
//     this.name = "John";
//     this.age = 30;
//     this.physics = true;
//   }
// }

// const teacher = new Teacher();
// const teacher2 = new Teacher2();
// console.log(teacher);
// console.log(teacher2);

// Полиморфизм

// class Dog {
//   constructor(name) {
//     this.name = name;
//   }

//   voice() {
//     return "Gav-gav";
//   }
// }
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }

//   voice() {
//     return "Meow-meow";
//   }
// }

// const animals = [new Dog("Bobik"), new Cat("Murzik")];

// animals.forEach((animal) => console.log(animal.voice()));
