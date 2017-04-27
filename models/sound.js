var mongoose = require('mongoose');

module.exports = mongoose.model('Sounds',{
	username: String,
    soundnum: Number,
    soundfile: Buffer,
});
