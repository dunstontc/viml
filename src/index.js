// const path = require('path');
const fs = require('fs');
const vimOptions = require('./data/options')

console.log(vimOptions.length);


const ReadFile = (fileName) => {
  // fs.readFile('my-file.txt', 'utf8', function(err, data) {
  //     if (err) throw err;
  //     console.log(data);
  // });
  try {
    var data = fs.readFileSync(fileName, 'utf8');
    console.log(data);
  } catch (e) {
    console.log('Error:', e.stack);
  }
};

