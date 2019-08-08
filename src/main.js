/**
 * @module mdProfile
 */

import full from '../resources/profiles/full.json';
import basic from '../resources/profiles/basic.json';

import schema from '../resources/profile-schema.json';

function asArray() {
  return [full, basic];
}

export { full, basic, schema, asArray };
