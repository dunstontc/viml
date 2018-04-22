// const fs = require('fs');
const path = require('path');
const vimOptions = require(path.join(__dirname, '..', 'completions', 'options'));

// const ReadFile = (fileName) => {
//   try {
//     var data = fs.readFileSync(fileName, 'utf8');
//     console.log(data);
//   } catch (err) {
//     console.log('Error:', err.stack);
//   }
// };
// ReadFile()

// {
//   "option": "allowrevins",
//   "shortname": "ari",
//   "description": "allow CTRL-_ in Insert and Command-line mode"
// },

const optionsArray = [];
vimOptions.map((opt) => {
  const { option, ...other } = opt;
  optionsArray.push(other);
});
// console.log(optionsArray);
process.stdout.write(JSON.stringify(optionsArray));
