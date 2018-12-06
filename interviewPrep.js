/*
 * what does 'use strict' do?
 *
 *
 **/
"use strict";
// asim = 1;
// var asim = 1;
// eval("asim = 2");
// console.log(asim);

/*
 Passing primitive types are passed by value
 Objects are passed by reference -
 *
 **
// pass by value
var a = 1;
function foo(a) {
  a = 2;
}
foo(a);
console.log(a); // will return A;

// pass by reference
// var a = {};
// function foo(a) {
//   a.moo = false;
// }
// foo(a);
// console.log(a);

// can only change a property not a reference
// var a = { foo: "bar" };

// function foo(a) {
//   a = { bar: "foo" };
// }
// foo(a);
console.log("######################");
console.log(a);
console.log("######################");
