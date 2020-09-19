const mongoose = require('mongoose');
const Lyric  = require('../db/model/lyric');  

var updateLyricLikes = async (id) => {
    try {
        return await Lyric.like(id);
    } catch(error){
        console.log(error);
    }
};

var fetchSongByLyricId = async (value) => {
    try {
        return await Lyric.findSongByLyricId(value);
    } catch (error) {
        console.log(error);
    }
};

var fetchLyricById = async (id) => {
    try {
        return await Lyric.getLyricById(id);
    } catch(error) {
        console.log(error);
    }
};

module.exports = {
    updateLyricLikes,
    fetchSongByLyricId,
    fetchLyricById
};