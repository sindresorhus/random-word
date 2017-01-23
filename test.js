import test from 'ava';
import m from './';

test(t => {
	t.true(m().length > 1);
});
