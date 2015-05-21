#!/usr/bin/env node
'use strict';
var meow = require('meow');
var randomWord = require('./');

meow({
	help: [
		'Example',
		'  random-word',
		'  ferriferous'
	].join('\n')
});

console.log(randomWord());
