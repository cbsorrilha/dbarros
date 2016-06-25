function escrevendoNoConsole(birrrl) {
	console.log(birrrl);
	console.log("Every day i worry all day... Something is waiting in the bushes for us...");
}

escrevendoNoConsole("WELCOME TO THE RICE FIELDS");

function isPalindrom(word) {
	word = word.replace(/\^|~|\?|,|\*|\.|\-|\_/g, "").replace(" ", "");
	return word == word.split("").reverse().join("");
}