const mongoose = require('../mongo-db').getMongoose();
const Schema = mongoose.Schema;

const lyricSchema = new mongoose.Schema({
    song: {
        type: Schema.Types.ObjectId,
        ref: 'song'
    },
    likes: { type: Number, default: 0 },
    content: { type: String }
});

module.exports = lyricSchema;