module.exports = function () {
	var sentences =  [
			{sentence: "É um gentleman.", author: "Minha mãe"}
		];
	return {
		getRandomSentence: function () {
			return sentences[Math.floor(Math.random()*sentences.length)];
		}
	}
	
}