module.exports = function () {
    var sentences =  [
            {sentence: "É um gentleman.", author: "Minha mãe"},
            {sentence: "Você quis dizer: 'Nerd'", author: "Ferramenta de busca"},
            {sentence: "Parece um cara legal.", author: "Pessoa desconhecida"}
        ];
    return {
        getRandomSentence: function () {
            return sentences[Math.floor(Math.random()*sentences.length)];
        }
    };
}