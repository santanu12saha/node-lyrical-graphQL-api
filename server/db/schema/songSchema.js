const mongoose = require('../mongo-db').getMongoose();
const Schema = mongoose.Schema;

const songSchema = new mongoose.Schema({
    title: { type: String },
    lyrics: [{
        type: Schema.Types.ObjectId,
        ref: 'lyric'
    }]
});

module.exports = songSchema;