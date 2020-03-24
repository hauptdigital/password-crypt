const { readPasswords, writePasswords } = require('./passwords');
const { encrypt, decrypt } = require('./crypto');

function get(key) {
  try {
    const allPasswords = readPasswords();
    const encryptedPassword = allPasswords.passwords[key];
    const password = decrypt(encryptedPassword);
    console.log(password);
  } catch (err) {
    console.error(err);
  }
}

function set(key, value) {
  const encryptedValue = encrypt(value);
  try {
    const allPasswords = readPasswords();
    allPasswords.passwords[key] = encryptedValue;
    writePasswords(allPasswords);
    skeleton();
  } catch (error) {
    console.error(error);
  }
}

function unset(key) {
  try {
    const allPasswords = readPasswords();
    delete allPasswords.passwords[key];
    writePasswords(allPasswords);
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
