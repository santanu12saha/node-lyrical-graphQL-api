const mongoose = require('mongoose');
var lyric = mongoose.model('lyric', require('../schema/lyricSchema'));
module.exports = lyric; 
