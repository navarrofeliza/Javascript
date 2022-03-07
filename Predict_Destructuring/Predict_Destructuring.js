// 1.
const cars = ["Tesla", "Mercedes", "Honda"];
const [randomCar] = cars;
const [, otherRandomCar] = cars;
//Predict the output
console.log(randomCar);
console.log(otherRandomCar);
// no clue, is random an actual index?
// oh it's just Tesla and Mercedes. ok then

// 2.
const employee = {
  name: "Elon",
  age: 47,
  company: "Tesla",
};
const { name: otherName } = employee;
//Predict the output
// console.log(name);
console.log(otherName);
// apparently getting an error already
// Yep. Reference error i guess.

// 3.
const person = {
  name: "Phil Smith",
  age: 47,
  height: "6 feet",
};
const password = "12345";
const { password: hashedPassword } = person;
//Predict the output
console.log(password);
console.log(hashedPassword);
// ima just say it's gonna be 12345
// I WAS RIGHT

// 4.
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [, first] = numbers;
const [, , , second] = numbers;
const [, , , , , , , , third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
// Didn't i read that '==' is a boolean? so false and true?
// RIGHT AGAIN!

// 5.
const lastTest = {
  key: "value",
  secondKey: [1, 5, 1, 8, 3, 3],
};
const { key } = lastTest;
const { secondKey } = lastTest;
const [, willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
// this one is hard. ima assume it's 1, 5, 1, 8, 3, 3.
// so i was right about the array, but then it's 1, then 5. i get it.
// 1, 5, 1 <-- that is technically an i[2] so it's second. whereas the 5 is the literal second key.
