'use strict';
const fs = require('fs');
const uniqueRandomArray = require('unique-random-array');
const wordListPath = require('word-list');

module.exports = uniqueRandomArray(fs.readFileSync(wordListPath, 'utf8').split('\n'));
