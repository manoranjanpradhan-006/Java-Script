let accountState;
accountCity = "Kataka";
const accountId = 12345;
var accountPassword = "1234";
let accountEmail = "chinu@gmail.com";

/*
-> Dont use var
-> Because of issue in block scope and functional scpoe
*/

console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountState,
  accountCity,
]);