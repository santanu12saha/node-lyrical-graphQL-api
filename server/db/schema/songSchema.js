const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const songSchema = new mongoose.Schema({
    title: { type: String },
    lyrics: [{
        type: Schema.Types.ObjectId,
        ref: 'lyric'
    }]
});

songSchema.statics.addLyric = function(id, content) {
    const Lyric = mongoose.model('lyric');
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

module.exports = songSchema;