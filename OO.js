"use strict";

// psuedo classes
function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

var dude = new Person("Marc", "Burt");
var dude2 = new Person("Mel", "Burt2");

Person.prototype.full_name_proto = function() {
  return this.first_name + " " + this.last_name;
};

dude.first_name = "Moo";
console.log(dude.full_name());
console.log(dude.full_name_proto());
console.log(dude2.full_name());
console.log(dude2.full_name_proto());
// console.log(newDude.new_name());
// console.log(newDude.protoFullName());
