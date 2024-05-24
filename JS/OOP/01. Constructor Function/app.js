function car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.start = function () {
    console.log(`Starting the ${this.make} ${this.model}...`);
  };
  this.stop = function () {
    console.log(`Stopping the ${this.make} ${this.model}...`);
  };
}

let myCar = new car("Toyota", "4runner", "2021");

console.log(myCar);
console.log(myCar.start());
console.log(myCar.stop());
