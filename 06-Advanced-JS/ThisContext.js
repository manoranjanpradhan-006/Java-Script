const person = {
  name: "chinu",
  greet() {
    console.log(`hii, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "mano" });
boundGreet();
