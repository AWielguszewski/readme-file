'use strict';

var readmeFile = require('..');

var test = require('tape');

var path = require('path');


test(function (t) {
  t.throws(readmeFile.bind(null, __dirname), /README/);
  t.equal(readmeFile(path.dirname(__dirname)), 'README.md');
  t.throws(readmeFile.bind(null, '/tmp'), /README/);
  t.end();
});
