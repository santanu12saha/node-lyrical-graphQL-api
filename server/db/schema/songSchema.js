const Lyric = require('../model/lyric');
const mongoose = require('../mongo-db').getMongoose();
mongoose.model('Lyric', require('../schema/lyricSchema'));

const Schema = mongoose.Schema;

const songSchema = new mongoose.Schema({
    title: { type: String },
    lyrics: [{
        type: Schema.Types.ObjectId,
        ref: 'Lyric'
    }]
});

songSchema.statics.addLyric = function(id, content) {
    return this.findById(id)
        .then(song => {
            const lyric = new Lyric({ content, id });
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