'use strict';

var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('babel-plugin:app', function () {
  before(function (done) {
    helpers.run(path.join(__dirname, '../generators/app'))
      .withOptions({ skipInstall: true })
      .withPrompts({
        name: 'do-something-really-awesome',
        description: 'A plugin that does a really cool thing',
        githubUsername: 'my-username',
        authorName: 'Oswald ThatEndsWald',
        authorEmail: 'oswald@thatendswald.com',
        keywords: 'foo, bar'
      })
      .on('end', done);
  });

  it('creates files', function () {
    assert.file([
      '.gitignore',
      '.npmignore',
      '.travis.yml',
      '.babelrc',
      'package.json',
      'README.md',
      'src/index.js',
      'test/index.js'
    ]);
  });

  it('populates package.json correctly', function () {
    assert.jsonFileContent('package.json', {
      name: 'babel-plugin-do-something-really-awesome',
      version: '0.0.0',
      description: 'A plugin that does a really cool thing',
      repository: 'my-username/babel-plugin-do-something-really-awesome',
      author: 'Oswald ThatEndsWald <oswald@thatendswald.com>',
      keywords: ['foo', 'bar']
    });
  });
});
