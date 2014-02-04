'use strict';
var assert = require('assert');
var randomWord = require('./index');

it('should return a random word', function () {
	assert(randomWord().length > 1);
});
