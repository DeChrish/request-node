var request = require('request');
var C = {};
C.requestFunctionSample= function(){
	C.requestFunction();
};
C.requestFunction = function(){
	request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.
  }
})
}
module.exports = C;


C.requestFunctionSample();

// module.exports = {
// 	hi:function (){ 
//    return 'hi hi';
// 	}
// }

// var C = {};
// C.hi =  function(){
// 	return 'hi hi';
// }
// module.exports = C;





	// request('http://www.google.com', function (error, response, body) {
	// 	console.log(error, response, body)
	// 	if (!error && response.statusCode == 200) {
	// 	  console.log(body) // Show the HTML for the Google homepage. 
	// 	}
	// })