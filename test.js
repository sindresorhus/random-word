import test from 'ava';
import randomWord from './index.js';

test('main', t => {
	t.true(randomWord().length > 1);
});
