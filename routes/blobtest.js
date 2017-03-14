var blobFile = require('.../models/blob')

blobFile.create({blob: blob, username: 'Rmcneley'}, function(err, user){
    if(err) console.log(err);
    else console.log(user);
    });