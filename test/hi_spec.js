var assert = require('assert');
var expect = require("chai").expect;

var hi = require('../src/hi.js');

it("should have sso session" , function(done){
  hi.requestFunction(function(err) {
                if(err) {
                    return done(err);
                }
                done();
            });
});
