const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lyricSchema = new mongoose.Schema({
    song: {
        type: Schema.Types.ObjectId,
        ref: 'song'
    },
    likes: { type: Number, default: 0 },
    content: { type: String }
});

lyricSchema.statics.like = function(id) {
    return this.findByIdAndUpdate(
        id, 
        { 
            $inc: { likes: 1 }
        }, 
        {   new: true }
    );
};

lyricSchema.statics.findSongByLyricId = function (value) {
    return this.findById(value).populate('song')
        .then(lyric => {
            return lyric.song;
        });
};

module.exports = lyricSchema;