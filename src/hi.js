var request = require('request');
var C = {};

C.requestFunction = function(callback){
	return request('http://www.google.com', function (error, response, body) {
  if (error) {
     callback(error)
  }
 callback(undefined,response.statusCode)
})
}
module.exports = C;
