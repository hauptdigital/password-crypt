const fs = require('fs');

const { MongoClient } = require('mongodb');
const assert = require('assert');

async function connectToMongoDB() {
  const uri = 'mongodb://localhost:27017/passwordcrypt';
  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to the MongoDB cluster
    await client.connect();

    // Make the appropriate DB calls
    await listDatabases(client);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
}

async function listDatabases(client) {
  databasesList = await client.db().admin().listDatabases();

  console.log('Databases:');
  databasesList.databases.forEach((db) => console.log(` - ${db.name}`));
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
exports.connectToMongoDB = connectToMongoDB;
