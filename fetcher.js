const request = require('request');
const fs = require('fs');

// Arguments from the command line
let url = process.argv[2];
let path = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    return; 
  }

  // Write to the file we are getting from path variable
  fs.writeFile(path, body, (filePathError) => {
    if (filePathError) { // Log an error if the file path is invalid
      console.log("There was an error", filePathError);
      return;
    } else {
      console.log(`Downloaded and saved ${Buffer.byteLength(body, 'utf-8')} bytes to ${path}`);
    }
  }); 
});

