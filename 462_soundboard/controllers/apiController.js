var Logins = require('../models/loginModel');


var bodyParser = require('body-parser');

module.exports = function(app) {
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    app.get('/api/logins/:uname', function(req, res) {
        
        Logins.find({ username: req.params.uname }, function(err, logins) {
            if (err) throw err;
            
            res.send(logins);
        });
        
    });


    app.post('/api/login', function(req, res) {
        
        if (req.body.id) {
            Logins.findByIdAndUpdate(req.body.id, { password: req.body.password, email: req.body.email, isDone: req.body.isDone, hasAttachment: req.body.hasAttachment }, function(err, login) {
                if (err) throw err;
                
                res.send('Success');
            });
        }
        
        else {
           
           var newLogin = Logins({
               username: 'test',
               password: req.body.password,
               email: req.body.email,
               isDone: req.body.isDone,
               hasAttachment: req.body.hasAttachment
           });
           newLogin.save(function(err) {
               if (err) throw err;
               res.send('Success');
           });
            
        }
        
    });
    

    app.delete('/api/login', function(req, res) {
        
        Logins.findByIdAndRemove(req.body.id, function(err) {
            if (err) throw err;
            res.send('Success');
        })
        
    });
    
    app.post('/users',function(req,res){
        var user_name = req.body.user;
        var email     = req.body.email;
        var pass      = req.body.password;
        var webLink   = req.body.websiteLink;
        console.log("User name = "+user_name+", password is "+pass+", Email is = "+email+", weblink is "+webLink);
        res.end("yes");
});  
}