'use strict';

var readmeFile = require('..');

var test = require('tape');

var path = require('path');


test(function (t) {
  var dir = path.dirname(__dirname);
  t.equal(readmeFile(dir), path.join(dir, 'README.md'));

  t.throws(readmeFile.bind(null, __dirname), /README/);
  t.throws(readmeFile.bind(null, '/tmp'), /README/);

  t.end();
});
