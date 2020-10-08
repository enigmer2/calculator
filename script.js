let classErm = document.getElementById("hidden-calc");
let bodyStyle = document.body;

// код из примера
let numbers = document.querySelectorAll(".number");
let operations = document.querySelectorAll(".operations");
let clearBtns = document.querySelectorAll(".clear-btn");
let decimalBtn = document.getElementById("decimal");
let result = document.getElementById("result");
let MemoryCurrentNumber = 0;
let MemoryNewNumber = false;
let MemoryPendingOperation = "";
// выше код из примера

let display = document.querySelector("#display-result");
let displayMemory = document.querySelector("#display-memory");
let operandFirst = "";
let operator = "";
let operandSecond = "";
let answer = "";
let virtualBotton = "";

// код из примера
for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  number.addEventListener("click", function (e) {
    numberPress(e.target.textContent);
  });
}

for (var i = 0; i < operations.length; i++) {
  var operationBtn = operations[i];
  operationBtn.addEventListener("click", function (e) {
    operationPress(e.target.textContent);
  });
}

for (var i = 0; i < clearBtns.length; i++) {
  var clearBtn = clearBtns[i];
  clearBtn.addEventListener("click", function (e) {
    clear(e.target.textContent);
  });
}

decimalBtn.addEventListener("click", decimal);

result.addEventListener("click", function (e) {
  console.log("Клик по result");
});

function numberPress(number) {
  if (MemoryNewNumber) {
    display.value = number;
    MemoryNewNumber = false;
  } else {
    if (display.value === "0") {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}

function operationPress(op) {
  localOperationMemory = display.value;

  if (bodyStyle.className === "erm-math-class") {
    displayMemory.value = " Лукашеночка набрал 80,1 % голосов и";
    display.value = "и дальше можете не считать ";
  } else {
    if (MemoryNewNumber && MemoryPendingOperation !== "=") {
      display.value = MemoryCurrentNumber;
    } else {
      MemoryNewNumber = true;
      if (MemoryPendingOperation === "+") {
        MemoryCurrentNumber += +localOperationMemory;
        operatorChange("+");
        displayEveryData();
      } else if (MemoryPendingOperation === "-") {
        MemoryCurrentNumber -= +localOperationMemory;
        operatorChange("-");
        displayEveryData();
      } else if (MemoryPendingOperation === "*") {
        MemoryCurrentNumber *= +localOperationMemory;
        operatorChange("*");
        displayEveryData();
      } else if (MemoryPendingOperation === "/") {
        MemoryCurrentNumber /= +localOperationMemory;
        operatorChange("/");
        displayEveryData();
      } else {
        MemoryCurrentNumber = +localOperationMemory;
      }
      display.value = MemoryCurrentNumber;
      MemoryPendingOperation = op;
    }
  }
}

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

function clear(id) {
  if (id === "ce") {
    display.value = "0"; // здесь строка? или число?
    MemoryNewNumber = true;
  } else if (id === "c") {
    display.value = "0";
    MemoryNewNumber = true;
    (MemoryCurrentNumber = 0), (MemoryPendingOperation = "");
  }
}
// выше код из примера

function numPress(e) {
  // функция обработчик листнера нажатия клавиш Num
  switch (e.keyCode) {
    case 96: // если нажата клавиша Num0
      console.log("нажата кнопка Num0");
      pressNumber("0");
      displayEveryData(); // вызывает решение и заносит его в display
      break;
    case 97: // если нажата клавиша Num1
      console.log("нажата кнопка Num1");
      pressNumber("1");
      displayEveryData(); // вызывает решение и заносит его в display
      break;
    case 98: // если нажата клавиша Num2
      console.log("нажата кнопка Num2");
      pressNumber("2");
      displayEveryData(); // вызывает решение и заносит его в display
      break;
    case 99: // если нажата клавиша Num3
      console.log("нажата кнопка Num3");
      pressNumber("3");
      displayEveryData(); // вызывает решение и заносит его в display
      break;
    case 100: // если нажата клавиша Num4
      console.log("нажата кнопка Num4");
      pressNumber("4");
      displayEveryData(); // вызывает решение и заносит его в display
      break;
    case 101: // если нажата клавиша Num5
      console.log("нажата кнопка Num5");
      pressNumber("5");
      displayEveryData(); // вызывает решение и заносит его в display
      break;
    case 102: // если нажата клавиша Num6
      console.log("нажата кнопка Num6");
      pressNumber("6");
      displayEveryData(); // вызывает решение и заносит его в display
      break;
    case 103: // если нажата клавиша Num7
      console.log("нажата кнопка Num7");
      pressNumber("7");
      displayEveryData(); // вызывает решение и заносит его в display
      break;
    case 104: // если нажата клавиша Num8
      console.log("нажата кнопка Num8");
      pressNumber("8");
      displayEveryData(); // вызывает решение и заносит его в display
      break;
    case 105: // если нажата клавиша Num9
      console.log("нажата кнопка Num9");
      pressNumber("9");
      displayEveryData(); // вызывает решение и заносит его в display
      break;
    case 106: // если нажата клавиша Num *
      console.log("нажата кнопка Num *");
      operatorChange("*");
      displayEveryData(); // вызывает решение и заносит его в display
      // сбросить operandSecond;
      break;
    case 107: // если нажата клавиша Num +
      console.log("нажата кнопка Num +");
      operatorChange("+");
      displayEveryData(); // вызывает решение и заносит его в display
      // сбросить operandSecond;
      break;
    case 111: // если нажата клавиша Num /
      console.log("нажата кнопка Num /");
      // сбросить operandSecond;
      operatorChange("/");
      displayEveryData(); // вызывает решение и заносит его в display
      break;
    case 109: // если нажата клавиша Num -
      console.log("нажата кнопка Num -");
      operatorChange("-");
      displayEveryData(); // вызывает решение и заносит его в display
      // сбросить operandSecond;
      break;
    case 108: // если нажата клавиша Num ,
      console.log("нажата кнопка Num,");
      decimalPress(",");
      displayEveryData(); // вызывает решение и заносит его в display
      break;
    case 110: // если нажата клавиша Num , Для браузеров у которых другой Keycode
      console.log("нажата кнопка Num ,");
      decimalPress(",");
      displayEveryData(); // вызывает решение и заносит его в display
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
      displayEveryData(); // вызывает решение и заносит его в display
      answerResult();
      break;
    case 8: // если нажата клавиша backspace
      console.log("нажата кнопка backspace");
      // сбросить operandSecond;
      break;
  }
}

function pressNumber(n) {
  if (operator !== "") {
    operandSecond += `${n}`;
  } else {
    operandFirst += `${n}`;
  }
}

function operatorChange(o) {
  if (operandSecond === "") {
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
  } else {
    answerResult();
    switch (o) {
      case "+":
        operandFirst = answer;
        operator = "+"; // перезапиcываем operator
        operandSecond = "";
        break;
      case "-":
        operandFirst = answer;
        operator = "-"; // перезапиcываем operator
        operandSecond = "";
        break;
      case "/":
        operandFirst = answer;
        operator = "/"; // перезапиcываем operator
        operandSecond = "";
        break;
      case "*":
        operandFirst = answer;
        operator = "*"; // перезапиcываем operator
        operandSecond = "";
        break;
    }
  }

  // // заносит нажатия чисел в operandFirst
  // // если нажат operator
  // // заносит нажатия чисел в operandSecond
}

function displayEveryData(f, o, s) {
  if (bodyStyle.className === "erm-math-class") {
    displayMemory.value = " Лукашеночка набрал 80,1 % голосов и";
    display.value = "и дальше можете не считать ";
  } else {
    displaySub = operandFirst + " " + operator + " " + operandSecond + "";
    display.value = displaySub;
  }
}
function answerResult() {
  answer = eval(+operandFirst + operator + +operandSecond); // приводим всё к математическому вырожению - вычисляем
  console.log(answer);
  displayMemory.value =
    operandFirst + " " + operator + " " + operandSecond + " = ";
  display.value = answer;
  
  operandFirst = answer;
  operator = "";
  operandSecond = "";
}
function decimalPress() {}
addEventListener("keydown", numPress);

//  определённые условия
classErm.addEventListener("click", erm);
function erm() {
  bodyStyle.classList.toggle("true-calc");
  bodyStyle.classList.toggle("erm-math-class");
  document.getElementById("clean-erase").classList.toggle("erm-math-class-btn");
  document.getElementById("clean").classList.toggle("erm-math-class-btn");
  document.getElementById("divide").classList.toggle("erm-math-class-btn");
  document.getElementById("multiply").classList.toggle("erm-math-class-btn");
  document.getElementById("seven").classList.toggle("erm-math-class-btn");
  document.getElementById("eight").classList.toggle("erm-math-class-btn");
  document.getElementById("nine").classList.toggle("erm-math-class-btn");
  document.getElementById("minus").classList.toggle("erm-math-class-btn");
  document.getElementById("four").classList.toggle("erm-math-class-btn");
  document.getElementById("five").classList.toggle("erm-math-class-btn");
  document.getElementById("six").classList.toggle("erm-math-class-btn");
  document.getElementById("plus").classList.toggle("erm-math-class-btn");
  document.getElementById("one").classList.toggle("erm-math-class-btn");
  document.getElementById("two").classList.toggle("erm-math-class-btn");
  document.getElementById("three").classList.toggle("erm-math-class-btn");
  document.getElementById("zero").classList.toggle("erm-math-class-btn");
  document.getElementById("decimal").classList.toggle("erm-math-class-btn");
  document.getElementById("result").classList.toggle("erm-math-class-btn");
  document.getElementById("display").classList.toggle("black");
  document.getElementById("display-memory").classList.toggle("black");
  document.getElementById("display-result").classList.toggle("black");
  displayMemory.value = "";
  display.value = "";
}
