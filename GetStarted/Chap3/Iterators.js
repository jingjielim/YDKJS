var num1 = 10;
var it = [];
for (let i = 0; i < num1; i++) {
  it.push(i);
}

var vals = [...it];

// Iterables
var arr = [10, [1, 2, 3], 30];

for (let val of arr) {
  console.log(`Array value: ${val}`);
}

var arrCopy = [...arr];
var greeting = "Hello World!";
var chars = [...greeting];
chars;

var buttonNames = new Map();
buttonNames.set("btn1", "Button 1");
buttonNames.set("btn2", "Button 2");
for (let [btn, btnName] of buttonNames) {
  console.log(`Hi, ${btnName}`);
}

for (let btnName of buttonNames.values()) {
  console.log(btnName);
}

var arr = [10, 20, 30];
for (let [idx, val] of arr.entries()) {
  console.log(`[${idx}: ${val}]`);
}
