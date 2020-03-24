const { get, set, unset } = require('./lib/commands');
const [command, key, value] = process.argv.slice(2);

if (command === 'get') {
  get();
} else if (command === 'set') {
  set(key, value);
} else if (command === 'unset') {
  unset(key);
} else {
  console.error('unknown command');
}
