"use strict"; // this will make everything undefined
this.marc = 1;
console.log(this);
console.log(this.marc);

// function checkThis() {
//   console.log(this);
// }

var marcFunc = {
  myName: "marc",
  checkThis: function() {
    console.log("##############");
    console.log(this);
    console.log("##############");
    function checkOther() {
      console.log("##############");
      console.log(this); // also calls the global object
      this.moo = 1;
      console.log("##############");
    }
    checkOther();
  },
  checkThisOther: function() {
    console.log("##############");
    console.log(this);
    console.log("##############");
    (function(that) {
      console.log("##############");
      console.log(that); // also calls the global object
      console.log("##############");
    })(this);
  }
};

// checkThis();
marcFunc.checkThis();
var func = marcFunc.checkThis; // this points to the global "this"
var funcOther = marcFunc.checkThisOther;
funcOther();
func();
