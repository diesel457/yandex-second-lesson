//Fn which genrated random string for the new class value
var generateRandomString = function(){
  var result       = '',
      letters      = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM_-',
      max_position = letters.length - 1,
      GENERATE_STRING_LENGTH = 5;

  for( i = 0; i < GENERATE_STRING_LENGTH; ++i ) {
      position = Math.floor ( Math.random() * max_position );
      result = result + letters.substring(position, position + 1);
  }
  return result;
};

//Constructor
var Parser = function(data) {
  var resultObject = {};

  for(var cl = 0; cl < data.length; cl++){
    resultObject[data[cl]] = generateRandomString();
  }
  
  return resultObject;
};

//Export module
module.exports = Parser;
