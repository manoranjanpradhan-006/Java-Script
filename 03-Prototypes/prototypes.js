let computer = {
  cpu: 12,
  RAM: "64GB",
};
let lenovo = {
  screen: "HD",
  __proto__: computer,
};
let tomHardware = {};

// console.log(`lenovo`, lenovo.__proto__);
// console.log(`lenovo`, lenovo.__proto__.RAM);

let genericCar = { tyres: 4 };

let tesla = {
  driver: "AI",
};

console.log(`tesla`, tesla.tyres);

console.log(`tesla`, Object.getPrototypeOf(tesla));
