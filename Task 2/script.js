const testFolder = './tests/';
const fs = require('fs');

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    fs.readFile(testFolder + file, 'utf8', (err, data) => {
      if(err){
        console.log(err);
        return;
      }

      console.log(data);

      const crypto = require('crypto');

      const hash = crypto.createHash('sha256').update(data).digest('base64');

      console.log(hash);
    })

    console.log(file);
  });
});
