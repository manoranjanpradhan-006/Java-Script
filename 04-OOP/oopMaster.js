function person(name, age) {
  this.name = name;
  this.age = age;
}
let me = new person("Manoranjan Pradhan", 19);
// console.log(me);
// console.log(me.name);

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}

class car extends Vehicle {
  drive() {
    return `${this.make} : this is an inheritance example`;
  }
}

let myCar = new car("TATA", "Safari");

console.log(myCar.start());
console.log(myCar.drive());
