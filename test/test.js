var assert = require('assert');
var fs = require('fs');
var pkg = require('../package.json');
var Ajv = require('ajv');

describe('Validate', function() {
  beforeEach(function() {
    Profile = require('../index.js');
  });

  describe('All objects present', function() {
    it('should return ok', function() {
      var all = fs.readdirSync(__dirname + '/../resources/profiles');

      assert.ok(all.length === Profile.asArray().length);
    });
  });

  describe('Check version for each file', function() {
    it('should return a version equal to package', function() {
      Profile.asArray().forEach(function(itm) {
        assert.strictEqual(itm.version, pkg.version);
      });
    });
  });

  describe('Validate profiles', function() {
    it('should validate all profiles', function() {
      var ajv = new Ajv();
      var validate = ajv.compile(Profile.schema);

      Profile.asArray().forEach(function(itm) {
        assert.ok(validate(itm));
      });
    });
  });
});
