const { get, set, unset, reset } = require('./lib/commands');
const [command, key] = process.argv.slice(2);
const { askForPassword, askForMasterPassword } = require('./lib/questions');
const { readMasterPassword } = require('./lib/database');
const { verifyHash } = require('./lib/crypto');

async function run() {
  if (command === 'reset') {
    const newMasterPassword = await askForMasterPassword();
    reset(newMasterPassword);
    return;
  }

  const dbMasterPassword = await readMasterPassword();
  const userMasterPassword = await askForMasterPassword();
  const userMasterPasswordIsCorrect = verifyHash(
    userMasterPassword,
    dbMasterPassword
  );
  if (!userMasterPasswordIsCorrect) {
    console.log('††† You are not allowed to enter the password crypt †††');
    return;
  }
  if (command === 'get') {
    get(key);
  } else if (command === 'set') {
    const password = await askForPassword(key);
    set(key, password);
  } else if (command === 'unset') {
    unset(key);
  } else {
    console.log('Unknown command');
  }
}

run();
