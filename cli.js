#!/usr/bin/env node
'use strict';
var fs = require('fs');
var randomWord = require('./index');

if (process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
	console.log('Usage:\n  $ random-word\n  ferriferous');
	return;
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(require('./package').version);
	return;
}

console.log(randomWord());
