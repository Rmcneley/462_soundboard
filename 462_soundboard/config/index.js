var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname + ':' 
        + configValues.pwd + '@ds053188.mlab.com:53188/sbdb';
    }
}
