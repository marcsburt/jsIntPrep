"use strict";

function Person(first_name, last_name) {
  this.firstName = first_name;
  this.lastName = last_name;
  this.myInitName = function() {
    console.log("first_name: " + first_name + " last_name: " + last_name);
  };
}

Person.prototype.myCurrentName = function() {
  console.log(
    "this.firstName: " + this.firstName + " this.lastName: " + this.lastName
  );
};

var me = new Person("Marc", "Burt");
me.firstName = "MarcProto";

me.myInitName();
me.myCurrentName();

// Add child class
function Professional(honorific, first_name, last_name) {
  Person.call(this, first_name, last_name);
  this.honorific = honorific;
}

//Inheritance here
Professional.prototype = Object.create(Person.prototype);
Person.prototype.myProfName = function() {
  console.log(
    "this.honorific: " +
      this.honorific +
      " this.firstName: " +
      this.firstName +
      " this.lastName: " +
      this.lastName
  );
};

var prof = new Professional("Mr.", "Marc", "Burt");
prof.honorific = "Dr.";

prof.myInitName();
prof.myCurrentName();
prof.myProfName();

// This is a better version instead of fake classes

var ObjPerson = {
  init: function(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    return this;
  },
  full_name: function() {
    return this.first_name + " " + this.last_name;
  }
};

var Marc = Object.create(ObjPerson);
Marc.init("Marc", "Burt");
console.log(Marc.full_name());

// this describes the object
var MarcInit = Object.create(ObjPerson, {
  first_name: {
    value: "MarcInit"
  },
  last_name: {
    value: "BurtInit"
  }
});

console.log(MarcInit.full_name());

function PersonFactory(first_name, last_name) {
  var person = Object.create(ObjPerson);
  person.first_name = first_name;
  person.last_name = last_name;
  return person;
}

var MarcFactory = PersonFactory("MarcFactory", "BurtFactory");
console.log(MarcFactory.full_name());
