console.log("Hello, JavaScript Primer!");
console.log("Apples");
console.log("This is a statement");
console.log("This is also a statement");
console.log("----------------------");

const myFunc = function () {
  console.log("This is my function");
  console.log("----------------------");
};

console.log("This statement is outside the function");
myFunc();

function LessParameters(a, b) {
  console.log("Less Parameters Function");
  console.log(`Printing a :${a}`);
  console.log(`Printing b :${b}`);
  console.log("----------------------");
}

function MoreParameters(a, b) {
  console.log("More Parameters Function");
  console.log(`Printing a :${a}`);
  console.log(`Printing b :${b}`);
  console.log("----------------------");
}

function DefaultParameters(a, b = "Default") {
  console.log("Default Parameters Function");
  console.log(`Printing a :${a}`);
  console.log(`Printing b :${b}`);
  console.log("----------------------");
}

function RestParameters(a, b, ...extraArgs) {
  console.log("Rest Parameters Function");
  console.log(`Printing a :${a}`);
  console.log(`Printing b :${b}`);
  for (let i = 0; i < extraArgs.length; i++) {
    console.log("Extra Arg:" + extraArgs[i]);
  }
  console.log("----------------------");
}

function ReturnValuefunction(name) {
  return "Hello " + name + ". Return Value Function.\n ----------------------";
}

function ArgumentFunction(nameFunction) {
  return "Hello " + nameFunction() + ". \n ----------------------";
}

LessParameters("Gerson");
MoreParameters("Gerson", "Perez", "Extra Parameter");
DefaultParameters("Gerson");
RestParameters("Gerson", "Perez", "Extra Parameter", "Another Extra Parameter");
console.log(ReturnValuefunction("Gerson"));

console.log(
  ArgumentFunction(function () {
    return "Gerson Perez passing function as argument";
  })
);

function printName(nameFunction, printFunction) {
  printFunction(ArgumentFunction(nameFunction));
}
printName(function () {
  return "Gerson Perez - Chaining function calls.";
}, console.log);

const arrowfunction = (nameFunction) => "Hello " + nameFunction() + ".";
const printNameArrow = (nameFunction, printFunction) =>
  printFunction(arrowfunction(nameFunction));

printNameArrow(function () {
  return "Gerson - Arrow function";
}, console.log);

function messageFunction(name, weather) {
  let message = `Hello, ${name}- using Let`;
  if (weather == "sunny") {
    let message = "It is a nice day";
    console.log(message);
  } else {
    let message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
  console.log("----------------------");
}
messageFunction("Gerson", "raining");

function messageFunctionWithVar(name, weather) {
  var message = `Hello, ${name} - using Var`;
  if (weather == "sunny") {
    // eslint-disable-next-line no-redeclare
    var message = "It is a nice day";
    console.log(message);
  } else {
    // eslint-disable-next-line no-redeclare
    var message = "It is " + weather + " today";
    console.log(message);
  }
  console.log(message);
  console.log("----------------------");
}
messageFunctionWithVar("Gerson", "sunny");

function outerFunction(name) {
  let myLocalVar = " sunny";
  let innerFunction = function () {
    return "Hello " + name + ". Today is" + myLocalVar + ".";
  };
  return innerFunction();
}
console.log(outerFunction("Gerson. Inner accessing outer variable"));
console.log("----------------------");

function messageFunctionTemplate(weather) {
  let message = `It is ${weather} today using a template string.`;
  console.log(message);
  console.log("----------------------");
}
messageFunctionTemplate("sunny");
// Equality and Identity Operators
console.log("-Identity Operators-");
console.log(1 === "1"); // false
console.log(1 === 1); // true
console.log(true === 1); // false
console.log(null === undefined); // false
console.log("----------------------");

console.log("-Equality Operators-");
console.log(1 == "1"); // false
console.log(1 == 1); // true
console.log(true == 1); // false
console.log(null == undefined); // false
console.log("----------------------");

// Concatenar vs suma
console.log("5" + 10); // "510"
console.log(5 + 10); // 15
console.log("----------------------");

// Arrays
let myArray = new Array();
myArray[0] = 100;
myArray[1] = "Gerson";
myArray[2] = true;

// Otra forma de definir un array
let myArrayLiteral = [100, "Gerson", true];

// Leyendo elementos del array
console.log("First Element:" + myArray[0]);
console.log("Second Element:" + myArray[1]);
console.log("Third Element:" + myArray[2]);
console.log("----------------------");

// Enumerado de elementos del array
let myArrayEnum = [100, "Adam", true];
console.log("Using for loop:");
for (let i = 0; i < myArray.length; i++) {
  console.log(`Index ${i}: ${myArray[i]}`);
}
console.log("----------------------");
console.log("Using forEach:");
myArrayEnum.forEach((value, index) => console.log(`Index ${index}: ${value}`));
console.log("----------------------");

// Imprimiendo con una funcion externa
myArrayEnum.forEach(printArrayElement);

function printArrayElement(value, index) {
  console.log("Using external funcion:");
  console.log(`Index ${index}: ${value}`);
  console.log("----------------------");
}

// Spread Operator
function printItems(numValue, stringValue, boolValue) {
  console.log(`Number: ${numValue}`);
  console.log(`String: ${stringValue}`);
  console.log(`Boolean: ${boolValue}`);
}
let myArraySpread = [100, "Adam", true];
console.log("Using direct indexing");
printItems(myArraySpread[0], myArraySpread[1], myArraySpread[2]);
console.log("----------------------");

console.log("Using Spread Operator");
printItems(...myArraySpread);
console.log("----------------------");

console.log("Concatenando arreglos");
let myArray1 = [100, "Adam", true];
let myOtherArray = [200, "Bob", false, ...myArray1];
myOtherArray.forEach((value, index) => console.log(`Index ${index}: ${value}`));
console.log("----------------------");

// using array operadors
console.log("Chaining array operators - filter and reduce");
let products = [
  { name: "Hat", price: 24.5, stock: 10 },
  { name: "Kayak", price: 289.99, stock: 1 },
  { name: "Soccer Ball", price: 10, stock: 0 },
  { name: "Running Shoes", price: 116.5, stock: 20 },
];
let totalValue = products
  .filter((item) => item.stock > 0)
  .reduce((prev, item) => prev + item.price * item.stock, 0);
console.log(`Total value: $${totalValue.toFixed(2)}`);
console.log("----------------------");

// Creando objetos
console.log("Creando objectos - funcion Object");
let myData = new Object();
myData.name = "Adam";
myData.weather = "sunny";
console.log(`Hello ${myData.name}.`);
console.log(`Today is ${myData.weather}.`);

console.log("Creando objectos - objecto literal");
let myDataLiteral = {
  name: "Adam",
  weather: "sunny",
};
console.log(`Hello ${myDataLiteral.name}.`);
console.log(`Today is ${myDataLiteral.weather}.`);

let name = "Gerson";
let myDataVariableComoPropiedad = {
  name,
  weather: "Rainy",
};
console.log(`Hello ${myDataVariableComoPropiedad.name}.`);
console.log(`Today is ${myDataVariableComoPropiedad.weather}.`);
console.log("----------------------");

// Function as methods
console.log("Function as methods");
let myDataWithMethods = {
  name: "Adam",
  weather: "sunny",
  printMessages: function () {
    console.log(`Hello ${this.name}.`);
    console.log(`Today is ${this.weather}.`);
  },
};
myDataWithMethods.printMessages();
console.log("----------------------");

console.log("Function as methods without function keyword (ES6)");
let myDataWithMethodsWithoutFunctionKeyWord = {
  name: "Adam",
  weather: "sunny",
  printMessages() {
    console.log(`Hello ${this.name}.`);
    console.log(`Today is ${this.weather}.`);
  },
};
myDataWithMethodsWithoutFunctionKeyWord.printMessages();
console.log("----------------------");

// Copiando objetos
console.log("Copiando objetos - Object.assign");
let myDataParacopiar = {
  name: "Adam",
  weather: "sunny",
  printMessages() {
    console.log(`Hello ${myDataParacopiar.name}.`);
    console.log(`Today is ${myDataParacopiar.weather}.`);
  },
};
let secondObject = {};
Object.assign(secondObject, myDataParacopiar);
secondObject.printMessages();
console.log("----------------------");

// Importando una funcion desde otro archivo
console.log(
  "Importando una funcion desde otro archivo - Relativo al archivo actual"
);
import functionSumaRelativa from "./maths/sum.js";
let arrayParaSumarRelativa = [10, 20, 30, 40, 50];
let resultadoSumaRelativa = functionSumaRelativa(arrayParaSumarRelativa);
console.log(
  `El resultado de la suma del arreglo ${arrayParaSumarRelativa} es: ${resultadoSumaRelativa}`
);
console.log("----------------------");

console.log(
  "Importando una funcion desde otro archivo - Relativo al folder src"
);
import functionSuma from "@/maths/sum";
let arrayParaSumar = [10, 20, 30, 40, 50];
let resultadoSuma = functionSuma(arrayParaSumar);
console.log(
  `El resultado de la suma del arreglo ${arrayParaSumar} es: ${resultadoSuma}`
);
console.log("----------------------");

// Importando desde un modulo con multiple features
console.log("Importando varias funciones desde otro archivo");
import additionFunction from "./maths/sum";
import { multiply, subtract } from "./maths/operations";
let values = [10, 20, 30, 40, 50];
console.log(`Sum: ${additionFunction(values)}`);
console.log(`Multiply: ${multiply(values)}`);
console.log(`Subtract: ${subtract(1000, values)}`);
console.log("----------------------");

// Importando y cambiando nombre de la funcion importada
console.log(
  "Importando varias funciones desde otro archivo y cambiando nombre"
);
import additionFunction1 from "./maths/sum";
import { multiply1, subtract as minus } from "./maths/operations";
let values1 = [10, 20, 30, 40, 50];
console.log(`Sum: ${additionFunction1(values1)}`);
console.log(`Multiply1: ${multiply(values1)}`);
console.log(`Subtract: ${minus(1000, values1)}`);
console.log("----------------------");

// Importando todos los features de un modulo
console.log("Importando todos los features de un modulo usando * as");
import additionFunctionTodo from "./maths/sum";
import * as ops from "./maths/operations";
let valuesTodo = [10, 20, 30, 40, 50];
console.log(`Sum: ${additionFunctionTodo(valuesTodo)}`);
console.log(`Multiply: ${ops.multiply(valuesTodo)}`);
console.log(`Subtract: ${ops.subtract(1000, valuesTodo)}`);
console.log("----------------------");

// Importando desde archivo index.js de un modulo
console.log("Importando todos los features de archivos combinados en index.js");
import * as math from "./maths";
let valuesTodosCombinados = [10, 20, 30, 40, 50];
console.log(`Sum: ${math.addition(valuesTodosCombinados)}`);
console.log(`Multiply: ${math.multiply(valuesTodosCombinados)}`);
console.log(`Subtract: ${math.subtract(1000, valuesTodosCombinados)}`);
console.log(`Mean: ${math.mean(valuesTodosCombinados)}`);
console.log("----------------------");

// Importando features individuales desde archivo index.js de un modulo
console.log(
  "Importando  features individuales de archivos combinados en index.js"
);
import {
  addition as addIndiv,
  multiply as multiplyIndiv,
  subtract as subtractindiv,
  mean as average,
} from "./maths";
let valuesIndividuales = [10, 20, 30, 40, 50];
console.log(`Add: ${addIndiv(valuesIndividuales)}`);
console.log(`MultiplyIndiv: ${multiplyIndiv(valuesIndividuales)}`);
console.log(`Subtract: ${subtractindiv(1000, valuesIndividuales)}`);
console.log(`Average : ${average(valuesIndividuales)}`);
