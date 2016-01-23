'use strict';

var getReadmeFile = require('..');

var test = require('tape');

var path = require('path');


test(function (t) {
  var dir = path.dirname(__dirname);
  var readmeFile = path.join(dir, 'README.md');
  t.equal(getReadmeFile(dir), readmeFile);
  t.equal(getReadmeFile(path.relative(process.cwd(), dir) || '.'), readmeFile);

  t.throws(getReadmeFile.bind(null, __dirname), /README/);
  t.throws(getReadmeFile.bind(null, '/tmp'), /README/);

  t.end();
});
