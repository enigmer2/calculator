function decimal() {}
//фильтрация только цыфры
function filter_input(e, regexp) {
  e = e || window.event;
  let target = e.target || e.srcElement;
  let isIE = document.all;

  if (target.tagName.toUpperCase() == "INPUT") {
    let code = isIE ? e.keyCode : e.which;
    if (code < 32 || e.ctrlKey || e.altKey) return true;

    let char = String.fromCharCode(code);
    if (!regexp.test(char)) return false;
  }
  return true;
}

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
//
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  number.addEventListener("click", function (e) {
    numberPress(e.target.textContent.trim());
  });
}
for (let i = 0; i < operations.length; i++) {
  const operationBtn = operations[i];
  operationBtn.addEventListener("click", function (e) {
    operation(e.target.textContent.trim());
  });
}
for (let i = 0; i < cleanBtns.length; i++) {
  const cleanBtn = cleanBtns[i];
  cleanBtn.addEventListener("click", function (e) {
    clear(e.target.id.trim());
  });
}
decimalBtn.addEventListener("click", decimal);
resultBtn.addEventListener("click", result);
//
function numberPress(number) {
  if (MemoryNewNumber) {
    display.value = number;
    displayMem.value += number;
    MemoryNewNumber = false;
  } else {
    if (display.value === "0") {
      display.value = number;
    } else {
      display.value += number;
    }
  }
}
function operation(op) {
  localOperationMemory = display.value;

  if (MemoryNewNumber) {
    display.value = MemoryCurrentNumber;
    displayMem.value += MemoryPendingOperation;
  } else {
    MemoryNewNumber = true;
    if (MemoryPendingOperation === "+") {
      MemoryCurrentNumber += parseFloat(localOperationMemory);
      //displayMem.value += "+";
    } else if (MemoryPendingOperation === "-") {
      MemoryCurrentNumber -= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === "*") {
      MemoryCurrentNumber *= parseFloat(localOperationMemory);
    } else if (MemoryPendingOperation === "/") {
      MemoryCurrentNumber /= parseFloat(localOperationMemory);
    } else {
      MemoryCurrentNumber = parseFloat(localOperationMemory);
    }
    display.value = MemoryCurrentNumber;
    MemoryPendingOperation = op;
  }
  console.log(op);
  displayMem.value += MemoryPendingOperation;
}

function decimal(argument) {
  var localDecimalMemory = display.value;

  if (MemoryNewNumber) {
    localDecimalMemory = "0.";
    MemoryNewNumber = false;
  } else {
    if (localDecimalMemory.indexOf(".") === -1) {
      localDecimalMemory += ".";
    }
  }
  display.value = localDecimalMemory;
  console.log("Клик по .");
}

function clear(id) {
  if (id === "cleanErase") {
    display.value = "0"; // здесь строка
    displayMem.value = "";
    MemoryNewNumber = true;
  } else if (id === "clean") {
    display.value = "0";
    displayMem.value = "";
    MemoryNewNumber = true;
    (MemoryCurrentNumber = 0), (MemoryPendingOperation = ""); //дописать чтобы удалять пояледнюю цифру
  }
}
