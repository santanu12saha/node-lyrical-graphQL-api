const mongoose = require('mongoose');
var song = mongoose.model('song', require('../schema/songSchema'));
module.exports = song;