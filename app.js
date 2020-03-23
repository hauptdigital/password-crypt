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
    fs.writeFileSync('./db.json', JSON.stringify(db, null, 2));
    debugSkeleton();
    console.log('called SET with', key, value);
    console.log('New', key, 'is', value);
  } catch (error) {
    console.error(error);
  }
}

function unset() {
  try {
    const db = get();
    delete db[key];
    fs.writeFileSync('./db.json', JSON.stringify(db, null, 2));
    debugSkeleton();
    console.log('called UNSET with', key, value);
    console.log(key, 'was deleted');
  } catch (error) {
    console.error(error);
  }
}

function debugSkeleton() {
  console.log(
    '\nline      .-.\nline     (o.o)\nline      |=|\nline     __|__\nline   //.=|=.\\\nline  // .=|=. \\\nline  \\ .=|=. // \nline   \\(_=_)// \nline    (:| |:)\nline     || ||\nline     () ()\nline     || ||\nline     || ||\nline    ==   ==\nline'
  );
}

if (command === 'get') {
  get();
} else if (command === 'set') {
  set();
} else if (command === 'unset') {
  unset();
} else {
  console.error('unknown command');
}
