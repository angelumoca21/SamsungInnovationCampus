var nconf = require('nconf');
nconf.env();
console.log('value of OS environment variables: %s',nconf.get('OS'));