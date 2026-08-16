const date = new Date();

console.log(date.getFullYear(), date.getMonth(), date.getDate());

// console.log(new Date(2026, 7, 7, 19, 3).toString());
// console.log(Math.floor(Date.now() / 1000));

// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());

date.toLocaleString("default", {
  weekday: "long",
});