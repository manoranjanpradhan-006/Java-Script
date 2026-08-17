function person(name, age) {
  this.name = name;
  this.age = age;
}

function car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new car("Toyota", "Camry");
console.log(myCar);

let myNewCar = new car("Tata", "Safari");
console.log(myNewCar);

function greet() {
  console.log("Hello, ");
}
