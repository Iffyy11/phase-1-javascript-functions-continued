function example() {
  console.log("This is a function declaration");
}
hoisted(); // works!
function hoisted() {
  console.log("I'm hoisted!");
}
const example = function () {
  console.log("This is a function expression");
};
// A function without a name
function () {
  console.log("Anonymous function");
}
// Only valid inside an expression (e.g. callback, IIFE, etc.)
// A function without a name
function () {
  console.log("Anonymous function");
}
// Only valid inside an expression (e.g. callback, IIFE, etc.)
const sayHello = function () {
  console.log("Hello!");
};
(function () {
  console.log("IIFE ran immediately!");
})();
function outer() {
  const message = "Hello";
  function inner() {
    console.log(message);
  }
  inner(); // can access message
}
function outer() {
  const outerVar = "Outer";
  return function inner() {
    console.log(outerVar);
  };
}
const innerFunc = outer();
innerFunc(); // Outer
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
const add5 = makeAdder(5);
console.log(add5(3)); // 8
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
const mondayWork = function(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};
function wrapAdjective(flair = "*") {
  return function(adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}
wrapAdjective("!!!")("a hard worker");
// => "You are !!!a hard worker!!!"
