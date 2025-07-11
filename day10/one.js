// 후치연산
let increment = 10;
console.log("1", increment); // 10
increment++;
console.log("2", increment); // 11
console.log("3", increment++); // 11
console.log("4", increment); // 12

let decrement = 10;
console.log("dec1", decrement); // 10
decrement--;
console.log("dec2", decrement); // 9
console.log("dec3", decrement--); // 9
console.log("dec4", decrement); // 8

// 전치연산
let incFirst = 10;
console.log("incFirst1", incFirst); // 10
incFirst++;
console.log("incFirst2", incFirst); // 11
console.log("incFirst3", ++incFirst); // 12
console.log("incFirst4", incFirst); // 12

let decFirst = 10;
console.log("decFirst1", decFirst); // 10
decFirst--;
console.log("decFirst2", decFirst); // 9
console.log("decFirst3", --decFirst); // 8
console.log("decFirst4", decFirst); // 8
