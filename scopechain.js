// this works
var myVar = "hello world";
function goo() {
  function foo() {
    console.log(myVar);
  }
  foo();
}

goo();

// this does not;
var myBadVar = "I did not fail at all";
function bad() {
  console.log(myBadVar);
}

function wayBadder() {
  var myBadVar = "hello fail";
  bad();
}

wayBadder();
