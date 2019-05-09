const getVersion = require('./index');
const pkg = require('./package.json');

function test() {
  console.log('pkg.version')
  console.log(pkg.version)
  console.log('getVersion')
  console.log(getVersion)
  const versionsMatch = getVersion === pkg.version;

  console.log('versionsMatch');
  console.log(versionsMatch);

  return versionsMatch;
}

function runTest() {
  const testValue = test();
  console.log(testValue);

  if(testValue) {
    console.log('PASSED');
    return true;
  }

  throw new Error('DID NOT PASS');
}

runTest();
