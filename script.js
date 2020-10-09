// обьявление переменных
let buttons = document.querySelectorAll(".button");            // Выбор кнопок 
let presedButton = 0;                                          // Переменная нажатой кнопки  
let operandFirst = "";                                         // хранение первого операнда
let operator = "";                                             // хранение оператора
let operandSecond = "";                                        // хранение второго операнда
let display = document.querySelector("#display-result");       // Выбор дисплэя ввода
let displayMemory = document.querySelector("#display-memory"); // Выбор дисплэя истории
let answer = "";                                               // хранение ответа

function buttonPress(e) {
  if (e.keyCode === undefined) {
    presedButton = e.target.textContent; 
  } else {
    presedButton = e.keyCode;
  }
  // обработчик листнера нажатия клавиш
  switch (presedButton) {
    case "0":
    case 96:                                  // если нажата клавиша 0
      pressNumber("0");
    break;
    case "1":
    case 97:                                  // если нажата клавиша 1
      pressNumber("1");
    break;
    case "2":  
    case 98:                                  // если нажата клавиша 2
      pressNumber("2");
    break;
    case "3":
    case 99:                                  // если нажата клавиша 3
      pressNumber("3");
    break;
    case "4":
    case 100:                                 // если нажата клавиша 4
      pressNumber("4");
    break;
    case "5":
    case 101:                                 // если нажата клавиша 5
      pressNumber("5");
    break;
    case "6":
    case 102:                                 // если нажата клавиша 6
      pressNumber("6");
    break;
    case "7":
    case 103:                                 // если нажата клавиша 7
      pressNumber("7");
    break;
    case "8":
    case 104:                                 // если нажата клавиша 8
      pressNumber("8");
    break;
    case "9":
    case 105:                                 // если нажата клавиша 9
      pressNumber("9");
    break;
    case "*":
    case 106:                                 // если нажата клавиша  *
      operatorChange("*")
    break;
    case "+":  
    case 107:                                 // если нажата клавиша  +
      operatorChange("+")
    break;
    case "/":
    case 111:                                 // если нажата клавиша  /
      operatorChange("/")
    break;
    case "-":
    case 109:                                 // если нажата клавиша  -
      operatorChange("-")
    break;
    case ",":
    case 108:                                 // если нажата клавиша  ,
    case 110:                                 // если нажата клавиша  , Для браузеров у которых другой Keycode
      pressNumber(".");
    break;
    case "C":                                 // удаляет всё 
    case 46:                                  // если нажата клавиша delete
      operandFirst = "";
      operator = "";
      operandSecond = "";
      answer = "";
      display.value = "0";
      displayMemory.value = "0";
    break;
    case "=":
    case 13:                                  // если нажата клавиша enter
      answer =  eval(+operandFirst + operator + +operandSecond);
      display.value = answer;
    break;
    case "CE":
    case 8:                                   // если нажата клавиша backspace удаляет второй операнд
      operandSecond = "";
    break;
  }
  displayMemory.value = operandFirst + "" + operator + "" + operandSecond + "";
  display.value = answer;
}

// листнер - нажатия клавишь на Num-клавитуре
addEventListener("keydown", buttonPress);

// листнер  - нажатия клавишь на  виртуальной клавитуре
for (let i = 0; i < buttons.length; i++) {
  let number = buttons[i];
  number.addEventListener("click", buttonPress);
}

// функция если оператор поменялся
function operatorChange(o) {
  if (operandSecond === "") {
    switch (o) {
      case "+":
        operator = "+";                       // перезапиcываем operator
        operandSecond = "";
        break;
      case "-":
        operator = "-";                       // перезапиcываем operator
        operandSecond = "";
        break;
      case "/":
        operator = "/";                       // перезапиcываем operator
        operandSecond = "";
        break;
      case "*":
        operator = "*";                       // перезапиcываем operator
        operandSecond = "";
        break;
    }
  } else {
    answer =  eval(+operandFirst + operator + +operandSecond);
    switch (o) {
      case "+":
        operandFirst = answer;                // заносим первый операнд в ответ 
        operator = "+";                       // перезапиcываем operator
        operandSecond = "";                   // обнуляем второй операнд
        break;
      case "-":
        operandFirst = answer;                // заносим первый операнд в ответ 
        operator = "-";                       // перезапиcываем operator
        operandSecond = "";                   // обнуляем второй операнд
        break;
      case "/":
        operandFirst = answer;                // заносим первый операнд в ответ 
        operator = "/";                       // перезапиcываем operator
        operandSecond = "";                   // обнуляем второй операнд
        break;
      case "*":
        operandFirst = answer;                // заносим первый операнд в ответ 
        operator = "*";                       // перезапиcываем operator
        operandSecond = "";                   // обнуляем второй операнд
        break;
    }
  }
}

// проверяет не пустой ли оператор и от условия заносит в первую или во вторую переменную
function pressNumber(n) {

  if (operator !== "") {                      // цифры вводятся во второй операнд
    if (operandSecond === "0") {
      if (n === ".")  {
         if (operandSecond.indexOf(".") === -1) {  
          operandSecond = "0"+`${n}`; 
        } 
      } 
      else {
        operandSecond += `${n}`;
      }
    } else {
       if (n === ".")  {
          if (operandSecond.indexOf(".") === -1) { 
            operandSecond += `${n}`; 
        } 
      } 
      else {
        operandSecond += `${n}`;
      }
    }
  } 

  else {                                    // цифры вводятся в первый операнд
    if (operandFirst === "0") {
      if (n === ".")  {
         if (operandFirst.indexOf(".") === -1) {  
          operandFirst = "0"+`${n}`; 
        } 
      } 
      else {
        operandFirst += `${n}`;
      }
    } else {
       if (n === ".")  {
          if (operandFirst.indexOf(".") === -1) { 
            operandFirst += `${n}`; 
        } 
      } 
      else {
        operandFirst += `${n}`;
      }
    }
  }
}
