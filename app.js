var fs = require('fs');

// Synchronous read
var rawData1 = fs.readFileSync('./people.json');
var rawData2 = fs.readFileSync('./people2.json');
var people1 = JSON.parse(rawData1);
var people2 = JSON.parse(rawData2);

// merge 2 arrays of objects into one
Array.prototype.push.apply(people1,people2);

// sorted by first_name
people1.sort(function compare(a,b){
  if (a.first_name < b.first_name){ return -1}
  else if (a.first_name == b.first_name){ return 0}
  else {return 1};
});


// convert obj to json
var json = JSON.stringify(people1);

// create and write new data into txt file
fs.writeFile('peopleComplete.txt', json, 'utf8', function(err){
  if(err)throw err;
  console.log('Saved');
});
