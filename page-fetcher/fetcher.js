const request = require('request');
const fs = require('fs');

const input1 = process.argv.slice(2)[0];
const input2 = process.argv.slice(2)[1];

const fetcher = (givenUrl, givenPath) => {
  request(givenUrl, (error, response, body) => {
    if (error) {
      console.log('error:', error);
      // Print the error if one occurred
    } else if (!error) {
      fs.writeFile(givenPath, body, err => {
        if (err) {
          console.log('An error has occurred:');
          console.error(err);
        } else if (!err) {
          console.log(`Downloaded and saved ${body.length} bytes to ${input2}`);
        }
      });
    }
  });
};

fetcher(input1, input2);


// Command Line Input ---> http://www.example.edu/ /vagrant/page-fetcher/filedump