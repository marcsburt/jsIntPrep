"use strict";

// psuedo classes
function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

Person.prototype.full_name = function() {
  return this.first_name + " " + this.last_name;
};

function Professional(honorific, first_name, last_name) {
  Person.call(this, first_name, last_name);
  this.honorific = honorific;
}

Professional.prototype = Object.create(Person.prototype);
Professional.prototype.pro_name = function() {
  return this.honorific + " " + this.first_name + " " + this.last_name;
};

var pro = new Professional("yes", "marc", "burt");
console.log(pro.pro_name());
console.log(pro.full_name());
