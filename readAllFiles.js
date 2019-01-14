var fs = require('fs');


fs.readdir('./people', function(err, items) {
    // console.log(items);
    var rawData = [];
    for (let i=0; i<items.length; i++) {
        // console.log(items[i]);
        let raw = fs.readFileSync(`./people/${items[i]}`);
        let objOfRaw = JSON.parse(raw);
        // console.log(objOfRaw);
        Array.prototype.push.apply(rawData,objOfRaw);
        // console.log(rawData);
    }

    // convert obj to json
    var json = JSON.stringify(rawData);

    // create and write new data into txt file
    fs.writeFile('peopleComplete.json', json, 'utf8', function(err){
      if(err)throw err;
      console.log('Saved');
    });

});
