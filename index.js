'use strict';

var readmeFilenames = require('readme-filenames');

var fs = require('fs');


module.exports = function (dir) {
  var readmeFile;

  fs.readdirSync(dir).some(function (filename) {
    if (readmeFilenames.indexOf(filename) >= 0) {
      readmeFile = filename;
      return true;
    }
  });

  if (!readmeFile) {
    throw Error('README file not found in ' + dir);
  }

  return readmeFile;
};
