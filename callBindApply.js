"use strict";
// function marc(one, two) {
//   console.log(this);
// }

// a(); // call it this way

// marc.moo = 1;
// console.log(marc, marc.moo);

// console.log(marc.toString());

// function context() {
//   console.log("context");
// }

// marc.call({}); // why use .call()?  Stabalizing value of "this"; context is switched to whatever it's passed
// marc.call(context);
// context.moo = "moooooo";
// console.log(context());

// function a(b, c, d) {
//   console.log(this);
//   console.log(b);
//   console.log(c);
//   console.log(d);
// }

// function b() {
//   console.log(arguments);
// }

// function sum() {
//   var total = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// var things = [{ one: 1 }, { two: 2 }, { three: 3 }];
// var sumable = [1, 2, 3, 4, 5, 432, 5432];
// a.call({}, 2, 3, 4); // call for concrete number of variables
// a.apply(1, [2, 3, 4]); // call for undefined number of variables
// b.apply({}, [2, 3, 4, 5, 6]);
// b.apply({}, things);
// var x = sum.apply(null, things);
// var y = sum.apply(null, sumable);
// console.log("x:", x, "y:", y);
// marc();

var a = function() {
  console.log(this);
};
// var b = function() {
//   console.log(this);
// }.bind(1);
a.bind([1, 2, 3, 4, 5]);
a();
// b();
console.log(this);
