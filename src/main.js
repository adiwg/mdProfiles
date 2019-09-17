/**
 * @module mdProfile
 */

import full from '../resources/profiles/full.json';
import basic from '../resources/profiles/basic.json';
import project from '../resources/profiles/project.json';
import product from '../resources/profiles/product.json';

import schema from '../resources/profile-schema.json';
import pkg from '../package.json';

const version = pkg.version;

function asArray() {
  return [full, basic, project, product];
}

export default { full, basic, project, product, schema, asArray, version };
