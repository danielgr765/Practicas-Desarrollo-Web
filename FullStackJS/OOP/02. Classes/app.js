// CLASSES
// class Product {
//   constructor(name, price) {
//     this.name = name;
//     this.price = price;
//   }

//   displayProduct() {
//     console.log(`Product: ${this.name}`);
//     console.log(`Price: ${this.price}`);
//   }

//   calculateTotal(salesTax) {
//     return this.price + this.price * salesTax;
//   }
// }

// const salesTax = 0.15;

// const product1 = new Product("Shirt", 19.99);
// const product2 = new Product("Pants", 24.99);
// const product3 = new Product("Underwear", 9.99);

// product3.displayProduct();

// const total = product3.calculateTotal(salesTax);
// console.log(`Total price  (with tax): ${total.toFixed(2)}`);

//--------------------------------------------------------------------------
// Static = keyword that defines properties or methods that belong to a
//          class itself rather than the objects created from that class
//          (class owns anything static, not the objects).
//--------------------------------------------------------------------------
// class MathUtil {
//   static PI = 3.14159;

//   static getDiameter(radius) {
//     return radius * 2;
//   }
//   static getCircumference(radius) {
//     return 2 * this.PI * radius;
//   }
//   static getArea(radius) {
//     return this.PI * radius * radius;
//   }
// }

// console.log(MathUtil.PI);
// console.log(MathUtil.getDiameter(30));
// console.log(MathUtil.getCircumference(30));
// console.log(MathUtil.getArea(30));

//--------------------------------------------------------------------------
// inheritance = allows a new class to inherit properties and methods
//               from an existing class (parent -> child) helps with
//               code reusability
//--------------------------------------------------------------------------

// class Animal {
//   alive = true;

//   eat() {
//     console.log(`This ${this.name} is eating.`);
//   }
//   sleep() {
//     console.log(`This ${this.name} is sleeping.`);
//   }
// }

// class Rabbit extends Animal {
//   name = "Rabbit";

//   run() {
//     console.log(`This ${this.name} is running.`);
//   }
// }
// class Fish extends Animal {
//   name = "Fish";
//   swim() {
//     console.log(`This ${this.name} is swimming.`);
//   }
// }

// class Hawk extends Animal {
//   name = "Hawk";
//   fly() {
//     console.log(`This ${this.name} is flying.`);
//   }
// }

// const rabbit = new Rabbit();
// const fish = new Fish();
// const hawk = new Hawk();

// console.log(rabbit.alive);
// rabbit.eat();
// rabbit.sleep();
// rabbit.run();

// console.log(fish.alive);
// fish.eat();
// fish.sleep();
// fish.swim();

// console.log(hawk.alive);
// hawk.eat();
// hawk.sleep();
// hawk.fly();

//--------------------------------------------------------------------------
// super = keyword is used in classes to call the constructor or
//         access the properties and methods o a parent (superclass)
//         this = this object
//         super = the parent
//--------------------------------------------------------------------------

// class Animal {
//   constructor(name, age, runspeed) {
//     this.name = name;
//     this.age = age;
//   }

//   move(speed) {
//     console.log(`The ${this.name} move at a speed of ${speed}mph`);
//   }
// }

// class Rabbit extends Animal {
//   constructor(name, age, runspeed) {
//     super(name, age);
//     this.runspeed = runspeed;
//   }

//   run() {
//     console.log(`This ${this.name} can run`);
//     super.move(this.runspeed);
//   }
// }
// class Fish extends Animal {
//   constructor(name, age, swimspeed) {
//     super(name, age);
//     this.swimspeed = swimspeed;
//   }

//   swim() {
//     console.log(`This ${this.name} can swim`);
//     super.move(this.swimspeed);
//   }
// }
// class Hawk extends Animal {
//   constructor(name, age, flyspeed) {
//     super(name, age);
//     this.flyspeed = flyspeed;
//   }

//   fly() {
//     console.log(`This ${this.name} can fly`);
//     super.move(this.flyspeed);
//   }
// }

// const rabbit = new Rabbit("rabbit", 5, 20);
// const fish = new Fish("fish", 2, 30);
// const hawk = new Hawk("hawk", 1, 35);

// fish.swim();

//--------------------------------------------------------------------------
// closure = is a function defined another function
//--------------------------------------------------------------------------

// function createGame() {
//   let score = 0;

//   function increaseScore(increment) {
//     score += increment;
//     console.log(`+${increment}pts`);
//   }
//   function decreaseScore(decrement) {
//     score -= decrement;
//     console.log(`-${decrement}pts`);
//   }
//   function getScore() {
//     return score;
//   }

//   return { increaseScore, decreaseScore, getScore };
// }

// const score = new createGame();

// score.increaseScore(10);
// score.decreaseScore(3);
// console.log(`Your final score is ${score.getScore()}`);

// -------------------------------------------------------------------------
// setTimeout(callback,delay);
// clearTimeout(timeoutId);
// -------------------------------------------------------------------------

// setTimeout(function () {
//   window.alert("hello");
// }, 3000);

// const timeoutId = setTimeout(() => window.alert("hello"), 3000);
// clearTimeout(timeoutId);

let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("hello"), 3000);
  console.log("STARTED");
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("CLEARED");
}
