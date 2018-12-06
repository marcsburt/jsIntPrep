// function sayHello(name) {
//   var text = "hello: " + name;
//   return function() {
//     console.log(text);
//   };
// }

// var sayMyName = sayHello("Marc is the MAN");
// sayMyName();
// /**
//  * refer to variables outside of it's scope
//  */

// var foo = [];

// for (var i = 0; i < 10; i++) {
//   (function(y) {
//     foo[y] = function() {
//       return y;
//     };
//   })(i);
// }

// console.log(foo[0]());
// console.log(foo[1]());
// console.log(foo[2]());
// console.log(
//   (function f(n) {
//     return n > 1 ? n * f(n - 1) : n;
//   })(4)
// );

// "use strict";

// var globalVar = "global";
// function outer(outerArg) {
//   var outerVar = "outerVar";
//   // var globalVar = "global, but really outer";
//   return function inner(innerArg) {
//     // var globalVar = "not global at all";
//     var innerVar = "innerVar";
//     console.log(globalVar);
//     console.log(outerArg);
//     console.log(outerVar);
//     console.log(innerArg);
//     console.log(innerVar);
//   };
// }

// var test = outer("outer");
// test();
// console.log("0 || 1 = " + (0 || 1)); // boolean value for first value, but then the next values;
// console.log("1 || 2 = " + (1 || 2));
// console.log("0 && 1 = " + (0 && 1));
// console.log("1 && 2 = " + (1 && 2));

// var a = { moo: "a" },
//   b = { key: "b" },
//   c = { key: "c" };

// a[b] = 123;
// a.b = 123;

// a[c] = 456;
// a.c = 456;

// console.log(a["b"]);
// console.log(a["c"]);
// console.log(b);
// console.log(c);
// console.log(a[b]);
// console.log(a[c]);
// console.log(a);

// var length = 10;
// function fn() {
//   console.log(this.length);
// }

// var newObj = {
//   length: 6
// };

// var obj = {
//   length: 5,
//   method: function(fn) {
//     var fnMe = fn.bind(newObj);
//     fnMe();
//     arguments[0]();
//   }
// };

// var meObj = obj.method.bind(this);
// meObj(fn, 1, 2);

// let obj = {
//   a: 1,
//   b: 2,
//   c: {
//     age: 30
//   }
// };

// var objclone = Object.assign({}, obj);
// console.log("objclone: ", objclone);
// obj.d = 4;
// obj.c.age = 45;
// console.log("After Change - obj: ", obj); // 45 - This also changes
// console.log("After Change - objclone: ", objclone); // 45

// for (let i = 0; i < 5; i++) {
//   setTimeout(function() {
//     console.log(i);
//   }, 0);
// }

// for (var i = 0; i < 5; i++) {
//   (function(y) {
//     setTimeout(function() {
//       console.log("y:", y);
//     }, 1000);
//   })(i);
// }

// var array = [1, 2, 3, 4];
// array.push(5);
// array.unshift(0);
// console.log(array);
// array = [...array, "end"];
// console.log(array);
// // array[10] = 99;
// console.log(array.length);
// console.log(array[7 - 1]);
// console.log(typeof undefined);
// console.log(typeof null);

// console.log(typeof undefined == typeof NULL);
// console.log(typeof undefined == typeof null);
// console.log(typeof undefined === typeof NULL);
// console.log(typeof undefined === typeof null);

// var b = 1;
// function outer() {
//   var b = 2;
//   function inner() {
//     var y = b;
//     // y += 5;
//     b = 3;
//     console.log(b);
//     console.log(y);
//   }
//   inner();
// }
// outer();

// "use strict";
// function foo() {
//   return 1;
// }

// console.log(foo());

// function foo() {
//   return 2;
// }
// var dude = "hey, dude, from outside";

// function foo() {
//   var dude = "hey, man what the heck";
//   return dude;
// }

// var moo = foo();
// console.log(foo());
// console.log(moo);
