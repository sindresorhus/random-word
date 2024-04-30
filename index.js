import fs from 'node:fs';
import uniqueRandomArray from 'unique-random-array';
import wordListPath from 'word-list';

const randomWord = uniqueRandomArray(fs.readFileSync(wordListPath, 'utf8').split('\n'));

export default randomWord;
