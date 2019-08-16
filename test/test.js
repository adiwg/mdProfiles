var assert = require('assert');
var fs = require('fs');
var semver = require('semver');
var pkg = require('../package.json');
var Ajv = require('ajv');

describe('Validate', function() {
  beforeEach(function() {
    Profile = require('../index.js');
  });

  describe('Version is semantic', function() {
    it('should return ok', function() {
      semver.valid(Profile.version);
    });
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
        assert.strictEqual(itm.version, pkg.version, itm.title);
      });

      assert.strictEqual(Profile.schema.version, pkg.version, 'schema');
    });
  });

  describe('Validate profiles', function() {
    it('should validate all profiles', function() {
      var ajv = new Ajv();
      var validate = ajv.compile(Profile.schema);

      Profile.asArray().forEach(function(itm) {
        let val = validate(itm);

        assert.ok(
          val,
          validate.errors ? JSON.stringify(validate.errors[0]) : null
        );
      });
    });
  });
});
