const client = require('../mongo-db').getMongoDbClient();
const lyricSchema = require('../schema/lyricSchema');

var lyric = client.model('Lyric', lyricSchema);
module.exports = lyric; 
