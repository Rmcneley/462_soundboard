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

var isAuthenticated = function (req, res, next) {
	// if user is authenticated in the session, call the next() to call the next request handler 
	// Passport adds this method to request object. A middleware is allowed to add properties to
	// request and response objects
	if (req.isAuthenticated())
		return next();
	// if the user is not authenticated then redirect him to the login page
	res.redirect('/');
}

module.exports = function(passport){

	/* GET login page. */
	router.get('/', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('index', { message: req.flash('message') });
	});

	router.get('/login', function(req, res) {
    	// Display the Login page with any flash message, if any
		res.render('login', { message: req.flash('message') });
	});

	/* Handle Login POST */
	router.post('/login', passport.authenticate('login', {
		successRedirect: '/Soundboard',
		failureRedirect: '/login',
		failureFlash : true  
	}));

    router.post('/SbAdd', isAuthenticated, function(req, res) {
		var file = fs.readFileSync('public/temp.wav');
        fs.renameSync('public/temp.wav', './routes/audio/audio' + req.body.tnum + '.wav')
        //res.render('Soundboard',{ user: req.user });
        //Get a Mongo client to work with the Mongo server
		var sound = soundFile({
                    username: req.user.username,
                    soundnum: req.body.tnum,
                    soundfile: file
           });
           // Code to save it to database
           sound.save(function(err) {
               if (err) throw err;
			   console.log('success');
               //res.render('soundboard',{message: req.flash('message')});
           });
		res.redirect('/soundboard');
    });

    //TESTING RETREIVAL OF SOUND FILE FROM DATABASE
    router.post('/testing', isAuthenticated, function(req, res) {
		soundFile.findOne({username: req.user.username}, function (err, sound){
		if (err) return handleError(err);
		//console.log('\n\n\n\n TEST IS WORKING', sound.username, '\n\n\n\n');
		//console.log(sound.soundfile);
		var file = sound.soundfile;
		var TN = sound.soundnum;
		console.log(file);
		fs.writeFile('public/tempT.wav', file);
		fs.renameSync('public/tempT.wav', './routes/audio/audio' + TN + '.wav');
	});
		//the sound variable is carrying the info
	// function getSoundQuery(name){	
   	// 	var query = soundFile.find({soundfile : Sname});
   	// 	return query;
	// 	}	
		
	// var query =  getSoundQuery('Obi-wan');
	// 	query.exec(function(err,sound){
   	// 	if(err)
    //   		return console.log(err);
   	// 	soundFile.forEach(function(soundfile){
    //   		console.log(soundfile.soundfile);
  	// 		});
	// 	});
    //     var userfile = soundFile.findOne({}, function(error, data){
    // 		console.log(data);
	// 		});
		//console.log(file);
		//console.log(file);
		//var file = userfile["soundfile"];
		//console.log(userfile);
		
                //var collection = db.collection('sounds');
                // var userfile = collection.find(
				// 	{
                //     user: req.user.username
                // 	},
				// 	{
				// 	soundnum:1,
				// 	soundfile:1
				// 	}
				// )
                // //THIS IS NOT WORKING
                // // we want to somehow isolate the soundfile: data
                // // from the user's database and replace it with the
                // // temp variable
                // var file1 = userfile['soundnum'];
				// console.log(file1);
                // //fs.writeFile('public/tempT.wav', file);
                // //fs.renameSync('temp.wav', './routes/audio/audio12.wav');
				res.redirect('/soundboard');     
    });
    //---------------------------------------------------------------

	router.post('/soundboard', function (req, res) {
		//console.log(req.body.blob.toString('utf8'));
		req.pipe(fs.createWriteStream('public/temp.wav'))
		    .on('error', (e) => res.status(500).end(e.message))
    		.on('close', () => res.end('File saved'))
		// console.log(req.body.blob);
		// var curBuffer = new Buffer( req.body, 'binary' );
		// console.log(curBuffer);
		//console.log(buffer.toString('utf8'));

		// var sound = soundFile({
        //     username : req.user.username
		// 	   soundnum : req.body.tnum

        //    });
        //    // Code to save it to database
        //    newblob.save(function(err) {
        //        if (err) throw err;
		// 	   console.log('success');
        //        res.render('soundboard',{message: req.flash('message')});
        //    });
		//var tnum = req.body.tnum;
	});

	/* GET Registration Page */
	router.get('/signup', function(req, res){
		res.render('register',{message: req.flash('message')});
	});


	/* GET Soundboard page */
	router.get('/soundboard', isAuthenticated, function(req, res){
		res.render('Soundboard', { user: req.user });

	});

	/* Handle Registration POST */
	router.post('/signup', passport.authenticate('signup', {
		successRedirect: '/home',
		failureRedirect: '/signup',
		failureFlash : true  
	}));

	/* GET Home Page */
	router.get('/home', isAuthenticated, function(req, res){
		res.render('home', { user: req.user });
	});

	/* Handle Logout */
	router.get('/signout',function(req, res) {
		req.logout();
		res.redirect('/');
	});

	router.get('/audio1', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio1);
    	readStream.pipe(res);
	});
	
	router.get('/audio2', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio2);
    	readStream.pipe(res);
	});

	router.get('/audio3', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio3);
    	readStream.pipe(res);
	});

	router.get('/audio4', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio4);
    	readStream.pipe(res);
	});

	router.get('/audio5', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio5);
    	readStream.pipe(res);
	});

	router.get('/audio6', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio6);
    	readStream.pipe(res);
	});

	router.get('/audio7', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio7);
    	readStream.pipe(res);
	});

	router.get('/audio8', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio8);
    	readStream.pipe(res);
	});
	
	router.get('/audio9', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio9);
    	readStream.pipe(res);
	});

	router.get('/audio10', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio10);
    	readStream.pipe(res);
	});

	router.get('/audio11', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio11);
    	readStream.pipe(res);
	});

	router.get('/audio12', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio12);
    	readStream.pipe(res);
	});

	router.get('/audio13', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio13);
    	readStream.pipe(res);
	});

	router.get('/audio14', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio14);
    	readStream.pipe(res);
	});

	router.get('/audio15', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio15);
    	readStream.pipe(res);
	});

	router.get('/audio16', function(req, res){
    	res.set({'Content-Type': 'audio/mpeg'});
    	var readStream = fs.createReadStream(audio16);
    	readStream.pipe(res);
	});
	
	return router;
}





