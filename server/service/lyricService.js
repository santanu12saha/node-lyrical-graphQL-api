const lyricDao = require('../dao/lyricDao');

var addLyricLikesById = async (id) => {
    try {
        return await lyricDao.updateLyricLikes(id); 
    } catch (error) {
        console.log(error);
    }
};

var getSongByLyricId = async (value) => {
    try {
        return await lyricDao.fetchSongByLyricId(value);
    } catch (error) {
        console.log(error);
    }
};

var getLyricById = async (id) => {
    try {
        return await lyricDao.fetchLyricById(id);
    } catch(error) {
        console.log(error);
    }
};

module.exports = {
    addLyricLikesById,
    getSongByLyricId,
    getLyricById
};