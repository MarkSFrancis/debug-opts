const procArgs = process.argv.slice(2);
const nodeArgs = process.execArgv;

const args = procArgs.filter(a => !nodeArgs.includes(a));

if (args.length === 0 || !args[0]) {
  console.log('Please enter a name');
} else {
  console.log(`Hello ${args[0]}`);
}
