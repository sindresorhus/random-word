'use strict';
var assert = require('assert');
var randomWord = require('./');

it('should return a random word', function () {
	assert(randomWord().length > 1);
});
