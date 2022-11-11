var path = require('path');

var directories = ["users","mike","docs"]
var docsDirectory = directories.join(path.sep);
console.log('Document directory:%s',docsDirectory);
var curPath = path.join('/users/mike','notepad.exe');
console.log('File path:%s',curPath);

var filename = "/home/IOT/Documents/notepad.exe";
var dirname = path.dirname(filename);
var basename = path.basename(filename);
var extname = path.extname(filename);
console.log('directory:%s,filename:%s,extension:%s',dirname,basename,extname);