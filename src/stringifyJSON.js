// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  var answer = "";
  //establish base cases
  //if string, wrap string in quotes
  if(typeof obj === "string") {
	 return answer += '"' + obj + '"';
  }
  //if not an object, probably a primitive
  if(typeof obj != 'object') {
  	// undefined and functions are not stringifed
  	if(obj === undefined || typeof obj === 'function') {
  		return;
  	}

  	return answer += obj;
  }
  // null is an object
  if(obj === null) {
  	return answer += "null";
  }

  var keys = Object.keys(obj);
  var lastIndex = keys.length-1;
  
  //deal with various cases
  //Check if current value is an array
  if(Array.isArray(obj)) {
  	answer += '[';

  	keys.forEach( function(key, index) {
  		if(index != lastIndex){
  			answer += stringifyJSON(obj[key]) + ',';
  		} else {
  			answer += stringifyJSON(obj[key]);
  		}
  	});

  	return answer += ']';
  }

  //Check if current value is an object
  if(typeof obj === 'object'){
  	answer += '{';

  	keys.forEach( function(key, index) {
  		var elem = obj[key];
  		if( (elem && typeof elem != 'function') || elem === null || elem === NaN || elem === false ){
	  		if(index != lastIndex){
	  			answer += '"' + key + '":' + stringifyJSON(obj[key]) + ',';
	  		} else {
	  			answer += '"' + key + '":' + stringifyJSON(obj[key]);
	  		}
	  	}
  	});

  	return answer += '}';
  }

};
