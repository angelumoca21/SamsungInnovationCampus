var path = require('path');

var directories = ["Users","mike","docs"]
var docsDirectory = directories.join(path.sep);
console.log('Document directory:%s',docsDirectory);
var curPath = path.join('/Users/mike','notepad.exe');
console.log('File path:%s',curPath);

var filename = "C:\\Users\\mike\\notepad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);
console.log('Directory:%s,filename:%s,extension:%s',dirname,basename,extname);