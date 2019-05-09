const pkg = require('./package.json');

function getVersion() {
  console.log(pkg.version);
  return pkg.version;
}

module.exports = getVersion();