const songDao = require('../dao/songDao');

var saveSong = async (songRequest) => {
    var song = {
        title: songRequest.title
    };
    try {
        return await songDao.insertSong(song);
    } catch(error) {
        console.log(error);
    }
};

var saveLyric = async (content, songId) => {
    try {
        return await songDao.insertLyricToSong(content, songId);
    } catch(error) {
        console.log(error);
    }
};

var getLyricsById = async (id) => {
    try {
        return await songDao.fetchLyricsById(id);
    } catch(error) {    
        console.log(error);
    }
};

module.exports = {
    saveSong,
    saveLyric,
    getLyricsById
};