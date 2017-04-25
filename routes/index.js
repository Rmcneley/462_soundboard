var express = require('express');
var router = express.Router();
var soundFile = require('../models/sound');
var fs = require('fs');
var path = require('path');
var mongodb = require('mongodb');
var name;
var audio1 = path.join(__dirname, 'audio/audio1.wav');
var audio2 = path.join(__dirname, 'audio/audio2.wav');
var audio3 = path.join(__dirname, 'audio/audio3.wav');
var audio4 = path.join(__dirname, 'audio/audio4.wav');
var audio5 = path.join(__dirname, 'audio/audio5.wav');
var audio6 = path.join(__dirname, 'audio/audio6.wav');
var audio7 = path.join(__dirname, 'audio/audio7.wav');
var audio8 = path.join(__dirname, 'audio/audio8.wav');
var audio9 = path.join(__dirname, 'audio/audio9.wav');
var audio10 = path.join(__dirname, 'audio/audio10.wav');
var audio11 = path.join(__dirname, 'audio/audio11.wav');
var audio12 = path.join(__dirname, 'audio/audio12.wav');
var audio13 = path.join(__dirname, 'audio/audio13.wav');
var audio14 = path.join(__dirname, 'audio/audio14.wav');
var audio15 = path.join(__dirname, 'audio/audio15.wav');
var audio16 = path.join(__dirname, 'audio/audio16.wav');

var isAuthenticated = function(req, res, next) {
    // if user is authenticated in the session, call the next() to call the next request handler 
    // Passport adds this method to request object. A middleware is allowed to add properties to
    // request and response objects
    if (req.isAuthenticated())
        return next();
    // if the user is not authenticated then redirect him to the login page
    res.redirect('/');
}

module.exports = function(passport) {

    /* GET login page. */
    router.get('/', function(req, res) {
        // Display the Login page with any flash message, if any
        res.render('index', {
            message: req.flash('message')
        });
    });

    router.get('/login', function(req, res) {
        // Display the Login page with any flash message, if any
        res.render('login', {
            message: req.flash('message')
        });
    });

    /* Handle Login POST */
    router.post('/login', passport.authenticate('login', {
        successRedirect: '/initsoundboard',
        failureRedirect: '/login',
        failureFlash: true
    }));

    router.post('/SbAdd', isAuthenticated, function(req, res) {
        var number = req.body.tnum;
        var file = fs.readFileSync('public/temp.wav');
        fs.renameSync('public/temp.wav', './routes/audio/audio' + number + '.wav')
        var sound = soundFile({
            username: req.user.username,
            soundnum: number,
            soundfile: file
        });
        soundFile.findOneAndUpdate({
            username: req.user.username,
            soundnum: number
        }, {
            soundfile: file
        }, {
            upsert: true
        }, function(err, doc) {
            if (err) throw err;
        });
        console.log('\nSuccessfully saved to the Database\n');
        res.redirect('/soundboard');
    });

    router.get('/testing', isAuthenticated, function(req, res) {
        soundFile.findOne({
            username: req.user.username,
            soundnum: '12'
        }, function(err, soundRetreived) {
            if (err) return handleError(err);
            console.log(soundRetreived.username, '\'s sound has been saved in tempT.wav');
            //the sound variable is carrying the info
            fs.writeFileSync('public/tempT.wav', soundRetreived.soundfile, function(err) {
                if (err) throw err;
                console.log('\nFile Saved Successfully.\n');
            });
        })

        res.redirect('/soundboard');
    });

    router.post('/soundboard', function(req, res) {
        req.pipe(fs.createWriteStream('public/temp.wav'))
            .on('error', (e) => res.status(500).end(e.message))
            .on('close', () => res.end('File saved'))
    });

    /* GET Registration Page */
    router.get('/signup', function(req, res) {
        res.render('register', {
            message: req.flash('message')
        });
    });


    /* GET Soundboard page */
    router.get('/soundboard', isAuthenticated, function(req, res) {
        res.render('Soundboard', {
            user: req.user
        });

    });

    /* Handle Registration POST */
    router.post('/signup', passport.authenticate('signup', {
        successRedirect: '/initialize',
        failureRedirect: '/signup',
        failureFlash: true
    }));


router.get('/initialize', isAuthenticated, function(req, res) {
    //add message like "LOADING" or "INITIALIZING"
    var blankfile = fs.readFileSync('public/Silent.wav');
       soundFile.findoneandUpdateAsync({
        username: req.user.username,
        soundnum: 1
    }, {
        soundfile: blankfile
    }, {
        upsert: true
    }, function(err, doc) {
        if (err) throw err;
        console.log('\nSuccessfully saved to the Database\n' + count);
    })

    })

	router.get('/initsoundboard', isAuthenticated, function(req, res){
        var arr = new Array(15);
        var count = 1;
		
		soundFile.findOne({
            username: req.user.username,
            soundnum: count
        }, function(err, soundRetrieved) {
            if (err) return handleError(err);
            console.log(soundRetrieved.username, 'success');
            fs.writeFile('public/tempfile.wav', 
			soundRetrieved.soundfile, function(err) {
                if (err) throw err;
                console.log('\nFile Saved Successfully.' + count + '\n');
            });
        })
		fs.renameSync('public/tempfile.wav', './routes/audio/;audio' + count + '.wav');
        count++;
        arr.forEach(function(soundfunc) {
        soundfunc();
    })
    });
    /* GET Home Page */
    router.get('/home', isAuthenticated, function(req, res) {
        res.render('home', {
            user: req.user
        });
    });

    /* Handle Logout */
    router.get('/signout', function(req, res) {
        req.logout();
        res.redirect('/');
    });

    router.get('/audio1', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio1);
        readStream.pipe(res);
    });

    router.get('/audio2', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio2);
        readStream.pipe(res);
    });

    router.get('/audio3', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio3);
        readStream.pipe(res);
    });

    router.get('/audio4', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio4);
        readStream.pipe(res);
    });

    router.get('/audio5', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio5);
        readStream.pipe(res);
    });

    router.get('/audio6', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio6);
        readStream.pipe(res);
    });

    router.get('/audio7', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio7);
        readStream.pipe(res);
    });

    router.get('/audio8', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio8);
        readStream.pipe(res);
    });

    router.get('/audio9', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio9);
        readStream.pipe(res);
    });

    router.get('/audio10', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio10);
        readStream.pipe(res);
    });

    router.get('/audio11', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio11);
        readStream.pipe(res);
    });

    router.get('/audio12', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio12);
        readStream.pipe(res);
    });

    router.get('/audio13', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio13);
        readStream.pipe(res);
    });

    router.get('/audio14', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio14);
        readStream.pipe(res);
    });

    router.get('/audio15', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio15);
        readStream.pipe(res);
    });

    router.get('/audio16', function(req, res) {
        res.set({
            'Content-Type': 'audio/mpeg'
        });
        var readStream = fs.createReadStream(audio16);
        readStream.pipe(res);
    });

    return router;
}