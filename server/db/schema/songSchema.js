const mongoose = require('mongoose');
const Lyric = require('../model/lyric');
const Schema = mongoose.Schema;

const songSchema = new mongoose.Schema({
    title: { type: String },
    lyrics: [{
        type: Schema.Types.ObjectId,
        ref: 'lyric'
    }]
});

songSchema.statics.addLyric = function(id, content) {
    return this.findById(id)
        .then(song => {
            const lyric = new Lyric({ content, song });
            song.lyrics.push(lyric);
            return Promise.all([lyric.save(), song.save()])
                .then(([lyric, song]) => song);
        });
}

songSchema.statics.findLyrics = function(id) {
    return this.findById(id)
        .populate('lyrics')
        .then(song => song.lyrics);
}

songSchema.statics.removeSong = function(id) {
    return this.findOneAndRemove({ _id: id }).then(s => {
        if(s) {
            return Lyric.deleteMany({ song: s._id, _id: { $in: s.lyrics } }).then(() => {
                return s;
            });
        }
    });
}

songSchema.statics.getAllSongs = function() {
    return this.find({});
}

songSchema.statics.getSongById = function(id) {
    return this.findById(id);
}

module.exports = songSchema;