const fs = require('fs');

function readPasswords() {
  const passwords = fs.readFileSync('./db.json', 'utf8');
  const passwordsJSON = JSON.parse(passwords);
  return passwordsJSON;
}

function writePasswords(passwords) {
  fs.writeFileSync('./db.json', JSON.stringify(passwords, null, 2));
}

exports.readPasswords = readPasswords;
exports.writePasswords = writePasswords;
