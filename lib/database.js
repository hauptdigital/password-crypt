const fs = require('fs');

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

function connect() {
  // Connection URL
  const url = 'mongodb://localhost:27017/passwordcrypt';

  // Use connect method to connect to the Server
  MongoClient.connect(url, function (err, client) {
    assert.equal(null, err);
    client.close();
  });
}

function readDB() {
  const dbJSON = fs.readFileSync('./db.json', 'utf8');
  const db = JSON.parse(dbJSON);
  return db;
}

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
exports.connect = connect;
