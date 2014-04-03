# random-word [![Build Status](https://travis-ci.org/sindresorhus/random-word.svg?branch=master)](https://travis-ci.org/sindresorhus/random-word)

> Returns a random English word from the [Letterpress Word List](https://github.com/atebits/Words/blob/master/Words/en.txt)


## Install

```bash
$ npm install --save random-word
```


## Usage

```js
var randomWord = require('random-word');

randomWord();
//=> ferriferous

randomWord();
//=> microfloppies
```


## CLI

You can also use it as a CLI app by installing it globally:

```bash
$ npm install --global random-word
```

### Usage

```bash
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

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
