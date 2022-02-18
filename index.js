// types of functions
// 1. named function
function namedFunction(a, b) {
  return a * b;
}
document.write(namedFunction(1, 1) + "  im named function");
// 2.annonymous function
const annonymous = function (num) {
  return num + num;
};
document.write("</br>" + annonymous(1) + "  im annonymous function");
// 3.immediatly invoked function
let message = (function () {
  alert(" im self invoked function");
})();
// decleration vs expression
// decleration
function functionDecleration(num) {
  return num + num;
}
document.write(
  "<br/>" +
    "a function with name and parameters and return some value is function decleration"
);
// expression
const expressionFunction = function (num) {
  return num + num;
};
document.write("<br/>" + "a function without name is function expression");
//  parameters vs arguments
// parameters
function parameterFunction(a, b) {
  return a + b;
}
document.write("</br>" + parameterFunction() + " function with parameters");
// arguments
function argumentFunction(a, b) {
  return a * b;
}
document.write("</br>" + argumentFunction(3, 9) + " function with arguments");
// default parameters
function defaultParameters(a = 2, b = 3) {
  return a * b;
}
document.write(
  "</br>" + defaultParameters() + " function with default parameters"
);
// pure function
let x = 2;
function pureFunction(y) {
  return (y += x);
}
document.write("</br>" + pureFunction(5) + " pure function");
// Object / Array as parameters
let obj = {
  a: 9,
};
function objectAsParameter(obj) {
  return (obj.a = 100);
}
document.write("</br>" + obj.a + " object before call in function");
document.write(
  "</br>" + objectAsParameter(obj) + " Object after calling in function"
);
// rest parameter
function restParameter(a, b, ...rest) {
  console.log(rest[2]);
}
restParameter(1, 2, 3, 4, 5, 6, 7);
document.write("</br>" + restParameter() + " rest parameter in function");
// fat arrow function
const fatArrowfunction = (a, b) => {
  return a / b;
};
document.write("</br>" + fatArrowfunction(1, 3) + " Fat Arrow Function");
// Concise Function
const conciseFunction = (a) => a / a;
document.write("</br>" + conciseFunction(4) + " Concise Function");
// Higher Order Function which takes function as argument
function higherOrderFunction() {
  return defaultParameters();
}
document.write(
  "</br>" +
    higherOrderFunction() +
    " higher Order function which takes another function as an argument or return a function"
);
// Currying Function
function curringFunction(a) {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
}
document.write("</br>" + curringFunction(1)(9)(30) + " Curring function");
// Constructor Function
function constructorFucntion(name, age) {
  (this.name = name), (this.age = age);
}
const myfunction = new constructorFucntion("hussain", "22");
const myfunction2 = new constructorFucntion("nabeel", "21");
document.write("</br>" + myfunction.name + " Constructor Function example 1");
document.write("</br>" + myfunction2.name + " Constructor Function example 2");
// factory Function
function factoryFunction(name, age) {
  return { name, age };
}
const myfunction3 = factoryFunction("nabeel", "21");
document.write("</br>" + myfunction3.name + " factory function");
// callBack function
function greeting(name, callback) {
  console.log("hi there!");
  callback(name);
}
function callbackFunction(name) {
  console.log("welcome " + name);
}
setTimeout(greeting, 2000, "nabeel", callbackFunction);

// function Chaining
var obj2 = {
  result: 0,
  adding: function (a, b) {
    this.result = a + b;
    return this;
  },
  multiplying: function (c) {
    this.result = this.result * c;
    return this;
  },
};
obj2.adding(5, 2).multiplying(5);
document.write("</br>" + obj2.result + " function chaining");
// Early return Function

function earlyReturnFunction(a, b) {
  if (a === b) {
    return a * b;
  }
  return a + b;
}
document.write("</br>" + earlyReturnFunction(9, 9) + " Early return Function");
//  generator Functions
function* generatorFunction(i) {
  yield i + 35;
  yield i + 45;
  return 60;
}
const result = generatorFunction(5);
const value = result.next();
const value1 = result.next();
console.log(value);
console.log(value1);
document.write("</br>" + value.value + " generator Function");
//  async function
function asyncFunction() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("this is async Function!");
    }, 6000);
  });
}
async function asyncFunctionCall() {
  document.write("</br>" + " check Console");
  const time = await asyncFunction();
  console.log(time);
}
asyncFunctionCall();
