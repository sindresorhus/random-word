# random-word [![Build Status](https://travis-ci.org/sindresorhus/random-word.svg?branch=master)](https://travis-ci.org/sindresorhus/random-word)

> Get a random English word from the [Letterpress Word List](https://github.com/atebits/Words/blob/master/Words/en.txt)


## Usage

```sh
$ npm install --save random-word
```

```js
var randomWord = require('random-word');

randomWord();
//=> ferriferous

randomWord();
//=> microfloppies
```


## CLI

```sh
$ npm install --global random-word
```

```
$ random-word --help

  Example
    random-word
    ferriferous
```


### Tip

Use it to generate project/release names:

```sh
$ echo $(random-word)-$(random-word)
blacksnake-nautics
```


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
