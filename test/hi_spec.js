// var chai = require('chai');
var assert = require('assert');

var hi = require('../src/hi.js');

var user = {
    "username": "col622510010",
    "password": "password7",
     "label": "Testing",
    "group": "Member"
}

// it("should have sso session" , function(){
//   assert.equal(typeof hi, 'object');
//   assert.equal(hi.hi(), 'hi hi');
// });

it("should have sso session" , function(done){
  hi.requestFunctionSample();
  done();
  // hi.request();
});