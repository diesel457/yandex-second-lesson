// Constructor
function Parser(data) {
  this.data = data;
}

// Methods in class
Parser.prototype.init = function() {
  return this.filling();
};

Parser.prototype.random = function(iteration) {

  var _self        = this,
      result       = '',
      letters      = '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM_-',
      max_position = letters.length;

  for( i = 0; i < iteration; i++ ) {
    var position = Math.floor ( Math.random() * max_position );
    result = result + letters.substring(position, position + 1);
  };

  return result;

};

Parser.prototype.checkOnSimillar = function(obj, string) {

  var checkResult = false;

  for(key in obj){
    var value = obj[key];
    if(value === string){
      checkResult = true;
    }
  }

  return checkResult;

};

Parser.prototype.filling = function() {

  var classes = this.data,
      classesObject = {},
      simillarIndex = 1,
      iteration = 1;

  for(var i = 0; i < classes.length; i++){
    var randomClassName = this.random(iteration),
        isSimillar = this.checkOnSimillar(classesObject, randomClassName),
        SIMILLAR_CONSTANT = 1000;

    // Check on simillar class in exist object
    if(isSimillar){

      // Simillar index
      simillarIndex += 1;

      // Decrease iteration for search different class
      i -= 1;

      // Update iteration when don't have any different classes
      if(simillarIndex == SIMILLAR_CONSTANT){ iteration++; }

    }else{

      // Revert simillar index
      simillarIndex = 1;

      // Update class object when found deffirent class
      classesObject[classes[i]] = randomClassName;
    }
  }

  return classesObject;

};

module.exports = Parser;
