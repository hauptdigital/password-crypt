const fs = require('fs');

function readPasswords() {
  const passwordsJSON = fs.readFileSync('./db.json', 'utf8');
  const allPasswords = JSON.parse(passwordsJSON);
  return allPasswords.passwords;
}

function writePasswords(passwords) {
  const updatedPasswords = {
    masterPassword: readMasterPassword(),
    passwords: passwords,
  };
  fs.writeFileSync('./db.json', JSON.stringify(updatedPasswords, null, 2));
}

function readMasterPassword() {
  const passwordsJSON = fs.readFileSync('./db.json', 'utf8');
  const allPasswords = JSON.parse(passwordsJSON);
  return allPasswords.masterPassword;
}

exports.readPasswords = readPasswords;
exports.writePasswords = writePasswords;
exports.readMasterPassword = readMasterPassword;
