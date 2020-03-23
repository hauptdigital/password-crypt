const { readPasswords, writePasswords } = require('./lib/passwords');

const [command, key, value] = process.argv.slice(2);

function get() {
  try {
    const passwords = readPasswords();
    console.log(passwords);
  } catch (err) {
    console.error(err);
  }
}

function set() {
  try {
    const passwords = readPasswords();
    passwords[key] = value;
    writePasswords(passwords);
    debugSkeleton();
  } catch (error) {
    console.error(error);
  }
}

function unset() {
  try {
    const passwords = get();
    delete passwords[key];
    writePasswords(passwords);
    debugSkeleton();
  } catch (error) {
    console.error(error);
  }
}

function debugSkeleton() {
  console.log(
    '\nline      .-.\nline     (o.o)\nline      |=|\nline     __|__\nline   //.=|=.\\\nline  // .=|=. \\\nline  \\ .=|=. // \nline   \\(_=_)// \nline    (:| |:)\nline     || ||\nline     () ()\nline     || ||\nline     || ||\nline    ==   ==\nline'
  );
  console.log('called command', command, 'with key', key, 'and value', value);
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
