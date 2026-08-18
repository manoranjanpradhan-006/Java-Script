console.log("");
console.log(window);
console.log(document);

document.getElementById("click").addEventListener("click", function () {
  alert("there nothing to show");
});

document.querySelector(".tealist").addEventListener("click", function (event) {
  if (event.target) {
    alert(event.target.textContent);
  }
});

document.getElementById("click");
