const graphql = require('graphql');
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
            }
        };
    }
});

module.exports = mutation;