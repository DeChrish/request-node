var request = require('request');
var C = {};

C.requestFunction = function(){
	return request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(response.statusCode) 
  }
})
}
module.exports = C;
