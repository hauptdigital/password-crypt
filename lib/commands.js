const { readPasswords, writePasswords, writeDB } = require('./database');
const { encrypt, decrypt, hashPassword } = require('./crypto');

function get(key) {
  try {
    const passwords = readPasswords();
    const encryptedPassword = passwords[key];
    const password = decrypt(encryptedPassword);
    console.log(`††† You found ${password} in the crypt †††`);
  } catch (err) {
    console.error(err);
  }
}

function set(key, value) {
  const encryptedValue = encrypt(value);
  try {
    const passwords = readPasswords();
    passwords[key] = encryptedValue;
    writePasswords(passwords);
    skeleton();
    console.log(`††† You buried ${key} password in the crypt †††`);
  } catch (error) {
    console.error(error);
  }
}

function unset(key) {
  try {
    const passwords = readPasswords();
    delete passwords[key];
    writePasswords(passwords);
    skeleton();
    console.log(`††† You removed ${key} password from the crypt †††`);
  } catch (error) {
    console.error(error);
  }
}

function reset(newMasterPassword) {
  try {
    const db = {
      masterPassword: hashPassword(newMasterPassword),
      passwords: {},
    };
    writeDB(db);
    skeleton();
    console.log('††† Crypt is reset with new master password †††');
  } catch (error) {
    console.error(error);
  }
}

function skeleton() {
  console.log(
    '\nline      .-.\nline     (o.o)\nline      |=|\nline     __|__\nline   //.=|=.\\\nline  // .=|=. \\\nline  \\ .=|=. // \nline   \\(_=_)// \nline    (:| |:)\nline     || ||\nline     () ()\nline     || ||\nline     || ||\nline    ==   ==\nline'
  );
}

exports.get = get;
exports.set = set;
exports.unset = unset;
exports.reset = reset;
