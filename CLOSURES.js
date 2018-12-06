function sayHello(name) {
  var text = "hello " + name;
  return function() {
    return text; // this keeps what it needs in order to make the next pieces
  };
}

// reference of a set of variables that a function needs in order to use them later
// console.log(sayHello("Joe")());
// console.log(sayHello("Marc")());
// var testHello = sayHello("Mel");
// console.log(testHello());

// test knowledge of closures;
var foo = [];
for (var i = 0; i < 10; i++) {
  (function(y) {
    foo[y] = function() {
      return y;
    };
  })(i);
}

// let helps with this;
var moo = [];
for (let i = 0; i < 10; i++) {
  moo[i] = function() {
    return i;
  };
}

console.log(foo[0]());
console.log(foo[1]());
console.log(moo[0]());
console.log(moo[1]());

//HOISTING with functions

// console.log(hoistedFunc()());
// console.log(hoistedFunc(3)());
// function hoistedFunc(i) {
//   var y = i;
//   return foo[y || 0];
// }
// console.log(hoistedFunc(3)());

// // console.log(notHoisted()());
// // console.log(notHoisted(3)());

// var notHoisted = function(i) {
//   return foo[i];
// };
// console.log(notHoisted(2)());

// const greet = i => {
//   this.i = i;
//   return this;
// };

// var greeting = function(i) {
//   this.i = i;
//   return this;
// };
// function greeter(i) {
//   this.i = i;
//   return this;
// }

// console.log("######################################");
// console.log(greet(3));
// console.log("######################################");
// console.log(greeting(3));
// console.log("######################################");
// console.log(greeter(3));
// console.log("######################################");

var cb = function(x, fn) {
  return fn(x);
};

var fn = function(y) {
  return y;
};

var me = cb("hello", fn);
var you = cb("world", fn);
var exclaim = cb("!", fn);
console.log(me, you + exclaim);

var subj;

function doHomework(subject, callback) {
  subj = subject;
  var subj = "not subject";
  console.log(`Starting my ${subject} homework.`);
  callback(subj);
}

doHomework("math", function(subj) {
  console.log("Finished my homework");
  console.log(subj);
});

console.log(subj);
