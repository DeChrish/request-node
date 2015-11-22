var assert = require('assert');
var expect = require("chai").expect;

var hi = require('../src/hi.js');

it("should have sso session" , function(done){
  hi.requestFunction(function(err, status) {
                if(err) {
                    return done(err)
                }
                assert(status === 200)
                done()
            });
});
