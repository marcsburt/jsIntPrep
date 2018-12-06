// var animal = {
//   kind: "human"
// };

// console.log(animal);

// // var marc = {};

// // marc.__proto__ = animal;

// var marc = Object.create(animal, { food: { value: "mango" } });

// console.log("marc", marc);
// console.log(marc.food);
// console.log(marc);

// marc.kind = "itsa me";
// console.log(marc.kind);
// console.log(animal.kind);

// animal.kind = "ehhhhh";
// console.log(marc.kind);
// console.log(animal.kind);

// "use strict";
//right
// var bound = function sayHello(last_name) {
//   console.log("Hello " + this + " " + last_name);
// }.bind("Marc"); // bind only works when a var is set
// bound("Burt");
//wrong
// function sayGoodbye(last_name) {
//   console.log("Goodbye " + this + " " + last_name);
// }
// var goodbyeBound = sayGoodbye.bind("Burt");
// goodbyeBound("hello");
// sayGoodbye("Burt");

// var myObject = {
//   foo: "bar",
//   func: function() {
//     var self = this;
//     console.log("outer func:  this = ", this);
//     console.log("outer func:  this.foo = " + this.foo);
//     console.log("outer func:  self.foo = " + self.foo);
//     (function() {
//       console.log("inner func:  this.foo = " + this.foo);
//       console.log("inner func:  self.foo = " + self.foo);
//     })();
//   }
// };
// myObject.func();
// "use strict";
// var hello = function duh() {
//   var sum = this.one + this.two;
//   console.log(sum);
// };

// var world = hello.bind({ one: 1, two: 2 });
// world();

// function foo1() {
//   return {
//     bar: "hello"
//   };
// }

// function foo2() {
//   return;
//   {
//     bar: "hello";
//   }
// }

// function isInteger(x) {
//   return (x ^ 0) === x;
// }

// console.log(isInteger(20.5));
// console.log(isInteger("not a number at all"));

// function isStringPal(str) {
//   "use strict";
//   // console.log(str)
//   var len = str.length;
//   if (len % 2 === 0) {
//     var str1 = str.slice(0, len / 2).split("");
//     var str3 = str1.reverse();
//     var str4 = str3.join("");
//     console.log(str1, str3, str4);
//     // .reverse()
//     // .join("");
//     var str2 = str.slice(len / 2, len);
//     return str1 === str4;
//   }
//   return false;
// }

// console.log("abba", isStringPal("abba"));
// console.log("baba", isStringPal("baba"));
// console.log("abbba", isStringPal("abbba"));

// function sum(num, num) {
//   console.log(this);
// }
// function sum(x, y) {
//   if (arguments.length === 2) {
//     return arguments[0] + arguments[1];
//   } else {
//     return function(y) {
//       return x + y;
//     };
//   }
// }

// console.log(sum(2, 3));
// console.log(sum(2)(3));

// console.log(1 + "2" + "2"); // changes 1 to string
// var y = "1" * "2";
// console.log(y);
// console.log("1" + 2); // = 12 because + is a string concat first;
// console.log(1 + +"2" + "2");
// console.log(1 + -"1" + "2");
// console.log(+"1" + "1" + "2");
// console.log("A" - "B" + "2");
// console.log("A" - "B" + 2);

var list = [];

for (var i = 0; i <= 100; i++) {
  list.push(i);
}

var nextListItem = function() {
  var item = list.pop();
  if (item) {
    setTimeout(nextListItem, 0);
  }
};

nextListItem();
