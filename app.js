const fs = require('fs');
const [command, key, value] = process.argv.slice(2);

function get() {
  try {
    const data = fs.readFileSync('./db.json', 'utf8');
    const db = JSON.parse(data);
    return db;
  } catch (err) {
    console.error(err);
  }
}

function set() {
  try {
    const db = get();
    db[key] = value;
    const data = fs.writeFileSync('./db.json', JSON.stringify(db, null, 2));
    console.log(data);
  } catch (error) {
    console.error(error);
  }
  console.log(
    '\nline      .-.\nline     (o.o)\nline      |=|\nline     __|__\nline   //.=|=.\\\nline  // .=|=. \\\nline  \\ .=|=. // \nline   \\(_=_)// \nline    (:| |:)\nline     || ||\nline     () ()\nline     || ||\nline     || ||\nline    ==   ==\nline'
  );

  console.log('called SET with', key, value);
  console.log('New', key, 'is', value);
}

if (command === 'get') {
  get();
} else if (command === 'set') {
  set();
} else {
  console.error('unknown command');
}
