# random-word [![Build Status](https://travis-ci.org/sindresorhus/random-word.png?branch=master)](http://travis-ci.org/sindresorhus/random-word)

> Returns a random English word from the [Letterpress Word List](https://github.com/atebits/Words/blob/master/Words/en.txt)


## Install

```
npm install --save random-word
```


## Example

```js
var randomWord = require('random-word');

randomWord();
//=> ferriferous

randomWord();
//=> microfloppies
```


## CLI

You can also use it as a CLI app by installing it globally:

```
npm install --global random-word
```

### Usage

```
$ random-word
ferriferous
```


### Tip

Use it to generate project/release names:

```bash
$ echo $(random-word)-$(random-word)
blacksnake-nautics
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
