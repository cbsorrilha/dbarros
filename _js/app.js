var sentenceGenerator = require('./modules/sentenceGenerator.js')(),
	eventController = require('./modules/eventController.js')();

eventController.init();

console.log(sentenceGenerator.getRandomSentence());