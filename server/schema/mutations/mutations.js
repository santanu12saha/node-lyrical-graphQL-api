const graphql = require('graphql');
const LyricType = require('../types/lyric_type');
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = graphql;

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: () => {
        const SongType = require('../types/song_type');
        return {
            addSong: {
                type: SongType,
                args: {
                    title: { type: GraphQLString }
                },
                resolve(parentValue, args, { songService }) {
                   return songService.saveSong(args);
                }
            },
            addLyricToSong: {
                type: SongType,
                args: {
                    content: { type: GraphQLString },
                    songId: { type: GraphQLID }
                },
                resolve(parentValue, {content, songId}, { songService }) {
                    return songService.saveLyric(content, songId);
                }
            },
            likeLyric: {
                type: LyricType,
                args: { id: {type: GraphQLID} },
                resolve(parentValue, { id }, { lyricService }) {
                    return lyricService.addLyricLikesById(id);
                }
            }
        };
    }
});

module.exports = mutation;