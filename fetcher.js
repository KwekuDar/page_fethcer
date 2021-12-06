const request = require('request');
const fs = require('fs')
const args = process.argv.slice(2);

const fetchPage = function() {
    request(args[0], (error, response, body) => {

      
      fs.writeFile(args[1], body, err => {
        if (err) {
          console.error(err)
          return
        }
        //file written successfully
      })
      let path = args[1];
      let size = fs.stat(path, function(err, stats){
          return stats.size;
      })
      console.log(`downloaded and saved a certain amount of bytes to the contents of the file to ${args[1]}` );
  
    });
  };
fetchPage();
