//This files isn't transpiled, so must use CommonJS and ES5

//Register babel to transpile before our tests runs
require('babel-register')();

//Disable webpeck features that Mocha doesn't understand
require.extensions['.css']=function(){};

