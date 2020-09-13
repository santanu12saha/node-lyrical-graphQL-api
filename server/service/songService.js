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

module.exports = {
    saveSong
};