require('shelljs/global');
const fs = require('fs');
const replace = require('replace-in-file');

cp('app/index.html', 'build/index.html');

var replaceOptions = {

  //Single file
  files: 'build/index.html',

  //Replacement to make (string or regex)
  replace: /<script src=\"http:\/\/localhost:3000\/app\/assets\/app.js\"><\/script>/g,

  //Specify if empty/invalid file paths are allowed, defaults to false.
  //If set to true these paths will fail silently and no error will be thrown.
  allowEmptyPaths: false,
};

fs = require('fs')
fs.readFile('assets.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  replaceOptions.with = '<script src="' + JSON.parse(data).manifest.js + '"></script>';
  replaceOptions.with += '<script src="' + JSON.parse(data).vendor.js + '"></script>';
  replaceOptions.with += '<script async src="' + JSON.parse(data).app.js + '"></script>';

  replace(replaceOptions)
    .then(changedFiles => {
      console.log('Asset path updated in:', changedFiles.join(', '));
    })
    .catch(error => {
      console.error('Error occurred:', error);
    });
});

