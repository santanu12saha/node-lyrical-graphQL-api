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

var insertLyricToSong = async (content, songId) => {
    try {
        return await Song.addLyric(songId, content);
    } catch(error) {
        console.log(error);
    }
};

var fetchLyricsById = async (id) => {
    try {
        return await Song.findLyrics(id);
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    insertSong,
    insertLyricToSong,
    fetchLyricsById
};