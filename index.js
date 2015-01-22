'use strict';
var fs = require('fs');
var uniqueRandomArray = require('unique-random-array');
var wordListPath = require('word-list');

module.exports = uniqueRandomArray(fs.readFileSync(wordListPath, 'utf8').split('\n'));
