const fs = require('fs');



    const readFile = () => new Promise((resolve, reject) => {
  
      fs.readFile(`./async-await/data.json`, 'utf8', (err, data) => {
        if (err) reject(err)
        console.log(data);
        resolve({ response: JSON.parse(data), err: null })
      })
    })

module.exports = {
    readFile 
}