const functions = require("./functions");

// create a test for returnTwo function
// it should expect returnTwo to equal 2
test("returnTwo() should return 2.", () => {
  expect(functions.returnTwo()).toEqual(2);
});

// create a test for greeting function
// it should expect greeting to return "Hello, {name}."
test("greeting() should return a greeting based on the name passed into the function.", () => {
  expect(functions.greeting("Erika")).toEqual("Hello, Erika.");
  expect(functions.greeting("Phil")).toEqual("Hello, Phil.");
});

test("multiply() should return a dynamic product based on the 2 number parameters", () => {
  expect(functions.multiply(5, 5)).toEqual(25);
  expect(functions.multiply(1000, 0)).toEqual(0);
});

test("divide() should return a dynamic quotient based on the 2 number parameters", () => {
  expect(functions.divide(100, 10)).toEqual(10);
  expect(functions.divide(36, 6)).toEqual(6);
});

test("add() should return a dynamic sum based on the 2 number parameters", () => {
  expect(functions.add(100, 1)).toEqual(101);
  expect(functions.add(50, 20)).toEqual(70);
});

test("subtract() should return a dynamic difference based on the 2 number parameters", () => {
  expect(functions.subtract(100, 1)).toEqual(99);
  expect(functions.subtract(50, 20)).toEqual(30);
});