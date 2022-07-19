// function func1(str) {
//   return str;
// }

// console.log(func1("a"));

// const func1 = function (num) {
//   return num;
// };

// console.log(func1(123));

//arrow function

// const func2 = (str) => {
//   return str;
// };

// console.log(func2("gun"));

// const func3 = (num1, num2) => num1 + num2;
// console.log(func3(10, 20));

/**
 * 分割代入
 */

const myProfile = {
  name: "oshiro",
  age: 25
};

const message1 = `名前は${myProfile.name}で，年齢は${myProfile.age}です`;
console.log(message1);

const { name, age } = myProfile;
const message2 = `名前は${name}で，年齢は${age}`;
console.log(message2);
