// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  // your code here
  // use: document.body   element.childNodes   element.classList
  var startNodes = document;
  var answer = [];
  
  //recursive finder function
  var classFinder = function(parentElem){
  	var children = parentElem.childNodes;
  	// base case - if no children, then no where else to look
  	if(children === undefined) {
  		return;
  	}

  	//check each childNode if it has className
  	for(var i = 0; i < children.length; i++) {
  		var classes = children[i].classList; // oddly, not an array

  		if(classes) {
  			classes.forEach(function(value,index) {
  				if(value === className) {
  					answer.push(children[i]);
  				}
  			});	
  		}
  		//recursive call to check childNodes of intial childNode
  		classFinder(children[i]); 
  	}
  }
  
  //initial call of recursive function
  classFinder(startNodes);

  return answer;

};
