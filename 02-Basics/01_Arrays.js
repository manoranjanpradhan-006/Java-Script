const myArr = [0, 1, 2, 3, "chinu", 5, 6, 7, 8, 9];
const myArr2 = new Array(5);

// myArr.pop();

// console.log(myArr[4]);
myArr.push("mano");
myArr.pop();

for (let index = 0; index < myArr.length; index++) {
  const element = myArr[index];
  //   console.log(element);
}

// console.log(myArr2);

myArr.unshift("mad");

// console.log(myArr);

myArr.shift();

// console.log(myArr);

// console.log(myArr.includes(6));

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(arr);

arrTwo = arr.slice(2, 4);
// console.log(arr);
// console.log(arrTwo);

arrOne = arr.splice(1, 3);
// console.log(arr);
// console.log(arrOne);