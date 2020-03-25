const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017/passwordcrypt';
const database = 'passwordcrypt';

let client;

function connectToDB() {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log('††† You are now connected to the password crypt †††');
  return client.connect();
}

function closeConnectionToDB() {
  console.log('††† You are now disconnected from the password crypt †††');
  return client.close();
}

exports.connectToDB = connectToDB;
exports.closeConnectionToDB = closeConnectionToDB;
