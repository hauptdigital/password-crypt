const fs = require('fs');
const [command, key, value] = process.argv.slice(2);

function get() {
  try {
    const data = fs.readFileSync('./db.json', 'utf8');
    const db = JSON.parse(data);
    console.log(db[key]);
    return db[key];
  } catch (err) {
    console.error(err);
  }
}

function set() {
  console.log('called SET', key, value);
}

if (command === 'get') {
  get();
} else if (command === 'set') {
  set();
} else {
  console.error('unknown command');
}
