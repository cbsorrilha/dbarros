(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var sentenceGenerator = require('./modules/sentenceGenerator.js')();

console.log(sentenceGenerator.getRandomSentence());
},{"./modules/sentenceGenerator.js":4}],2:[function(require,module,exports){

},{}],3:[function(require,module,exports){
module.exports = function () {
    var menuContainer = document.getElementById("menu-container"),
        openBtn = menuContainer.getElementById('menu-btn'),
        menu = menuContainer.getElementsByClassName('menu')[0],
        menuLinks = menuContainer.getElementsByClassName('menu-links')[0],
        closeBtn = menuContainer.getElementsByClassName('close-btn')[0];

    function OpenMenu() {
        menu.style.display = "none";
    }

    return {
        init: function () {
            openBtn.addEventListener('click', OpenMenu);
        }
    };
}
},{}],4:[function(require,module,exports){
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
},{}]},{},[1,2,3,4]);
