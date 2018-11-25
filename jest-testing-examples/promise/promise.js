let promise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
  });


  module.exports = {promise};