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

var deleteSongById = async (id) => {
    try {
        return await songDao.removeSong(id);
    } catch(error) {
        console.log(error);
    }
};

var getAllSongs = async () => {
    try {
        return await songDao.fetchAllSongs();
    } catch(error) {
        console.log(error);
    }
};

var getSongById = async (id) => {
    try {
        return await songDao.fetchSongById(id);
    } catch(error) {
        console.log(error);
    }
};

module.exports = {
    saveSong,
    saveLyric,
    getLyricsById,
    deleteSongById,
    getAllSongs,
    getSongById
};