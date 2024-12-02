const urjigdehuun1 = document.getElementById("firstInput");
const urjigdehuun2 = document.getElementById("secondInput");
const urjih = document.getElementById("tentsuu");
const urjver = document.getElementById("hariu");
const mathUildel = document.getElementById("uildel");

urjih.addEventListener("click", () => {
  let x = mathUildel.value;
  let result = 0;

  switch (x) {
    case "*":
      result = parseInt(urjigdehuun1.value) * parseInt(urjigdehuun2.value);
      break;
    case "/":
      result = parseInt(urjigdehuun1.value) / parseInt(urjigdehuun2.value);
      break;
    case "+":
      result = parseInt(urjigdehuun1.value) + parseInt(urjigdehuun2.value);
      break;
    case "-":
      result = parseInt(urjigdehuun1.value) - parseInt(urjigdehuun2.value);
  }
  urjver.innerText = "=" + result;
});

// const updatedFirstButton = document.getElementById("firstButton");
// const updatedSecondButton = document.getElementById("secondButton");
// const updatedMain = document.getElementById("main");

// updatedFirstButton.addEventListener("click", () => {
//   let b = parseInt(updatedMain.innerText);
//   if (b > 0) {
//     updatedMain.innerText = b - 1;
//   }
// });
// updatedSecondButton.addEventListener("click", () => {
//   let a = parseInt(updatedMain.innerText) + 1;
//   updatedMain.innerText = a;
// });
