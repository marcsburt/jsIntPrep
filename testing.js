"use strict";
var me = "Burt";
function sayHello(name) {
  var text = "Hello " + name + " " + me;
  return (function(text) {
    console.log(text);
  })(text);
}

// sayHello("Marc")();
// var SayMarc = sayHello("Dude");
// SayMarc();

sayHello("Marc");

var foo = [];
for (var i = 0; i < 10; i++) {
  foo[i] = function() {
    return i;
  };
}

var doo = [];
for (var i = 0; i < 10; i++) {
  (function(y) {
    doo[y] = function() {
      return y;
    };
  })(i);
}

console.log(foo[5]());
console.log(doo[5]());
