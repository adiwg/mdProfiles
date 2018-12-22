//var bulk = require('bulk-require');
//var profiles = bulk(__dirname + '/src/profiles/', ['*.json']);
const full = require('./src/profiles/full.json');

const profiles = {
  full: full
};
console.log(profiles);

//exports.profiles = profiles;
exports.full = full;
