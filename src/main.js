/**
 * @module mdProfile
 */

import full from '../resources/profiles/full.json';
import basic from '../resources/profiles/basic.json';

import schema from '../resources/profile-schema.json';
import pkg from '../package.json';

const version = pkg.version;

function asArray() {
  return [full, basic];
}

export default { full, basic, schema, asArray, version };
