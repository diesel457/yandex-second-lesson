var Parser = require('./parser'),
    classes = require('./classesArray');

//Create new instant Parser class
var Parser = new Parser(classes);

//Init Parser class
console.log(Parser.init())
