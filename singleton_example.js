singleton = require('./utils.js').singleton;

// creates the object
single = new singleton('factory1')

// object already exists
single2 = new singleton()
