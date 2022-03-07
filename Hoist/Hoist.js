// 1.
console.log(hello);
var hello = "world";
//This will be undefined!

// 2.
var needle = "haystack";
test();
function test() {
  var needle = "magnet";
  console.log(needle);
}
// It was magnet all along!

// 3.
var brendan = "super cool";
function print() {
  brendan = "only okay";
  console.log(brendan);
}
console.log(brendan);
// only okay?
// nah it was super cool

//4.
var food = "chicken";
console.log(food);
eat();
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";
}
// chicken half-chicken?
// getting there

//5.
mean();
console.log(food);
var mean = function () {
  food = "chicken";
  console.log(food);
  var food = "fish";
  console.log(food);
};
// console.log(food);
// uh.. ima say chicken again.
// OH IT WAS AN ERROR ALL ALONG

// 6.
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
  genre = "rock";
  console.log(genre);
  var genre = "r&b";
  console.log(genre);
}
console.log(genre);
// uh, rock, r&b, then disco?
// oh i get it now. the var comes in second to just a pure variable.

// 7.
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
  dojo = "seattle";
  console.log(dojo);
  var dojo = "burbank";
  console.log(dojo);
}
console.log(dojo);
// san jose, seattle, then burbank?
// I WAS RIGHT BUT THEN I FORGOT THE LAST CONSOLE LOG

// 8.
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = "closed for now";
  }
  return dojo;
}
// const has more priority.. so... Chicago?
// i was right! i get it now!
