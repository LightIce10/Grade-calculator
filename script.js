// SIMPLE ADDITION IPO CALCULATOR BY MR>V

/* Input
let number1 = +prompt("Enter a number:");
let number2 = +prompt("Enter another number:");
// PROCESS
let total = number1 / number2;

// OUTPUT
// alert(total);
alert(`The result is ${number1} / ${number2} = ${total}`);
*/

// Input Real

document.getElementById("process").addEventListener("click", aveGrade);

// Output Real
function aveGrade() {
  let number1 = +document.getElementById("num1").value;
  let number2 = +document.getElementById("num2").value;
  let number3 = +document.getElementById("num3").value;
  let number4 = +document.getElementById("num4").value;
  let number5 = +document.getElementById("num5").value;

  document.getElementById("result").innerHTML = "";

  let total = (number1 + number2 + number3 + number4 + number5) / 5;
  document.getElementById("result").innerHTML = total;

  if (total > 100) {
    document.getElementById(
      "result"
    ).innerHTML = `Is Einstien on this because no way you got ${total}%`;
  }

  if (total <= 100 && total >= 80) {
    document.getElementById(
      "result"
    ).innerHTML = `You're a genuis to get ${total}%`;
  }

  if (total < 80 && total > 70) {
    document.getElementById(
      "result"
    ).innerHTML = `Keep working hard so we can get higher than ${total}%`;
  }

  if (total <= 70) {
    document.getElementById(
      "result"
    ).innerHTML = `I see the work, striving to get higher than ${total}%`;
  }

  if (total < 10 && total > 0) {
    document.getElementById(
      "result"
    ).innerHTML = `You need help to get higher than ${total}%`;
  }

  if (total < 0) {
    document.getElementById(
      "result"
    ).innerHTML = `Literally impossible, please put in real marks`;
  }
}
