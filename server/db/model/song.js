const client = require('../mongo-db').getMongoDbClient();
const songSchema = require('../schema/songSchema');

var song = client.model('Song', songSchema);
module.exports = song;