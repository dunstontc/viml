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

let optionsArray = [];
let allOptions = vimOptions.map(opt => optionsArray.push(opt.option));
// console.log(optionsArray);
process.stdout.write(JSON.stringify(optionsArray));
