const Song = require('../db/model/song');

getNewSong = (song) => {
    return new Song(song);
}

var insertSong = async (song) => {
    var newSong = getNewSong(song);
    try {
        return await newSong.save();
    } catch(error) {
        console.log(error);
    }
};

module.exports = {
    insertSong
};