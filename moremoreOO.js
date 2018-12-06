var Person = {
  init: function(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
    return this;
  },
  full_name: function() {
    return this.first_name + " " + this.last_name;
  }
};

var marc = Object.create(Person);
marc.init("Marc", "Burt");
console.log(marc.full_name());

//oooooorrrr

var mel = Object.create(Person, {
  first_name: {
    value: "Mel"
  },
  last_name: {
    value: "Burt"
  }
});
console.log(mel.full_name());

//ooorrrrrr
StreamlinedPerson = {
  full_name: function() {
    return this.first_name + " " + this.last_name;
  }
};

function PersonFactory(first_name, last_name) {
  var person = Object.create(StreamlinedPerson);
  person.first_name = first_name;
  person.last_name = last_name;
  return person;
}

var joe = PersonFactory("Joe", "McDonald");
console.log(joe.full_name());
