[![npm](https://nodei.co/npm/readme-file.png)](https://npmjs.com/package/readme-file)

# readme-file

[![Build Status][travis-badge]][travis] [![Dependency Status][david-badge]][david]

Get the name of README file in a directory.

[travis]: https://travis-ci.org/eush77/readme-file
[travis-badge]: https://travis-ci.org/eush77/readme-file.svg?branch=master
[david]: https://david-dm.org/eush77/readme-file
[david-badge]: https://david-dm.org/eush77/readme-file.png

## Example

```js
var readmeFile = require('readme-file');

readmeFile('.')
//=> "README.md"

try {
  readmeFile('/tmp')
}
catch (err) {
  err.message
  //=> "README file not found in /tmp"
}
```

## API

#### `readmeFile(dir)`

Returns the basename of a README file in the directory or throws an error.

## Install

```
npm install readme-file
```

## License

MIT
