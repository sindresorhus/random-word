'use strict';
var fs = require('fs');
var wordListPath = require('word-list');
var words = fs.readFileSync(wordListPath, 'utf8').split('\n');
var uniqueRandom = require('unique-random')(0, words.length - 1);

module.exports = function () {
	return words[uniqueRandom()];
};
