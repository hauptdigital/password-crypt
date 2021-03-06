const fs = require('fs');

function writeDB(db) {
  fs.writeFileSync('./db.json', JSON.stringify(db, null, 2));
}

function readPasswords() {
  const dbJSON = fs.readFileSync('./db.json', 'utf8');
  const db = JSON.parse(dbJSON);
  return db.passwords;
}

function writePasswords(passwords) {
  const db = readDB();
  db.passwords = passwords;
  writeDB(db);
}

function readMasterPassword() {
  const dbJSON = fs.readFileSync('./db.json', 'utf8');
  const db = JSON.parse(dbJSON);
  return db.masterPassword;
}

exports.readPasswords = readPasswords;
exports.writePasswords = writePasswords;
exports.readMasterPassword = readMasterPassword;
exports.writeDB = writeDB;
