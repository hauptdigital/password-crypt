const { readPasswords, writePasswords } = require('./passwords');

function get() {
  try {
    const passwords = readPasswords();
    console.log(passwords);
  } catch (err) {
    console.error(err);
  }
}

function set(key, value) {
  try {
    const passwords = readPasswords();
    passwords[key] = value;
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
