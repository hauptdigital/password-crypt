const { readPasswords, writePasswords } = require('./passwords');
const { encrypt, decrypt } = require('./crypto');

function get(key) {
  try {
    const passwords = readPasswords();
    const encryptedPassword = passwords[key];
    const password = decrypt(encryptedPassword);
    console.log(password);
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
  } catch (error) {
    console.error(error);
  }
}

function skeleton() {
  console.log(
    '\nline      .-.\nline     (o.o)\nline      |=|\nline     __|__\nline   //.=|=.\\\nline  // .=|=. \\\nline  \\ .=|=. // \nline   \\(_=_)// \nline    (:| |:)\nline     || ||\nline     () ()\nline     || ||\nline     || ||\nline    ==   ==\nline'
  );
  console.log('††† Your secret has been buried in the password crypt †††');
}

exports.get = get;
exports.set = set;
exports.unset = unset;
