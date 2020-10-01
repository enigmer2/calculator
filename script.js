let display = document.querySelector("#display-result");
let displayMemory = document.querySelector("#display-memory");
let operandFirst = "";
let operator = "";
let operandSecond = "";
let answer = "";

function numPress(e) {
  // функция обработчик листнера нажатия клавиш Num
  switch (e.keyCode) {
    case 96: // если нажата клавиша Num0
      console.log("нажата кнопка Num0");
      number("0");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      break;
    case 97: // если нажата клавиша Num1
      console.log("нажата кнопка Num1");
      number("1");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      break;
    case 98: // если нажата клавиша Num2
      console.log("нажата кнопка Num2");
      number("2");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      break;
    case 99: // если нажата клавиша Num3
      console.log("нажата кнопка Num3");
      number("3");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      break;
    case 100: // если нажата клавиша Num4
      console.log("нажата кнопка Num4");
      number("4");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      break;
    case 101: // если нажата клавиша Num5
      console.log("нажата кнопка Num5");
      number("5");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      break;
    case 102: // если нажата клавиша Num6
      console.log("нажата кнопка Num6");
      number("6");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      break;
    case 103: // если нажата клавиша Num7
      console.log("нажата кнопка Num7");
      number("7");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      break;
    case 104: // если нажата клавиша Num8
      console.log("нажата кнопка Num8");
      number("8");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      break;
    case 105: // если нажата клавиша Num9
      console.log("нажата кнопка Num9");
      number("9");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      break;
    case 106: // если нажата клавиша Num *
      console.log("нажата кнопка Num *");
      operatorChange("*");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      // сбросить operandSecond;
      break;
    case 107: // если нажата клавиша Num +
      console.log("нажата кнопка Num +");
      operatorChange("+");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      // сбросить operandSecond;
      break;
    case 111: // если нажата клавиша Num /
      console.log("нажата кнопка Num /");
      // сбросить operandSecond;
      operatorChange("/");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      break;
    case 109: // если нажата клавиша Num -
      console.log("нажата кнопка Num -");
      operatorChange("-");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      // сбросить operandSecond;
      break;
    case 108: // если нажата клавиша Num ,
      console.log("нажата кнопка Num,");
      decimalPress(",");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      break;
    case 110: // если нажата клавиша Num , Для браузеров у которых другой Keycode
      console.log("нажата кнопка Num ,");
      decimalPress(",");
      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      break;
    case 46: // если нажата клавиша delete
      console.log("нажата кнопка delete");
      operandFirst = "";
      operator = "";
      operandSecond = "";
      answer = "";
      display.value = "";
      displayMemory.value = "";
      break;
    case 13: // если нажата клавиша enter
      console.log("нажата кнопка enter");
      operatorChange();

      dusplayEveryDate(); // вызывает решение и заносит его в displayMemory
      answerResult();
      break;
    case 8: // если нажата клавиша backspace
      console.log("нажата кнопка backspace");
      // сбросить operandSecond;
      break;
  }
}

function number(n) {
  if (operator !== "") {
    operandSecond += `${n}`;
  } else {
    operandFirst += `${n}`;
  }
}

function pressNumber(number) {
  console.log(number);
}

function operatorChange(o) {
  switch (o) {
    case "+":
      operator = "+"; // перезапиcываем operator
      operandSecond = "";
      break;
    case "-":
      operator = "-"; // перезапиcываем operator
      operandSecond = "";
      break;
    case "/":
      operator = "/"; // перезапиcываем operator
      operandSecond = "";
      break;
    case "*":
      operator = "*"; // перезапиcываем operator
      operandSecond = "";
      break;
  }
  // // заносит нажатия чисел в operandFirst
  // // если нажат operator
  // // заносит нажатия чисел в operandSecond
}

function dusplayEveryDate(f, o, s) {
  displayMemory.value =
    operandFirst + " " + operator + " " + operandSecond + "";
}
function answerResult() {
  answer = eval(+operandFirst + operator + +operandSecond); // приводим всё к математическому вырожению - вычисляем
  console.log(answer);
  displayMemory.value =
    operandFirst + " " + operator + " " + operandSecond + " = " + answer;
}

addEventListener("keydown", numPress, answer);

/*

let numbers = document.querySelectorAll(".number"),
  operations = document.querySelectorAll(".operations"),
  cleanBtns = document.querySelectorAll(".clean"),
  decimalBtn = document.getElementById("decimal"),
  resultBtn = document.getElementById("result"),
  display = document.getElementById("displayResult"),
  displayMem = document.getElementById("displayMemory"),
  MemoryCurrentNumber = 0,
  MemoryNewNumber = false,
  MemoryPendingOperation = "";

decimalBtn.addEventListener("click", decimal);

function decimal(argument) {
  let localDecimalMemory = display.value;

  if (MemoryNewNumber) {
    localDecimalMemory = "0.";
    MemoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf(".") === -1) {
      localDecimalMemory += ".";
    }
  }
  display.value = localDecimalMemory;
 }

*/
