const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLString
} = graphql;

const songService = require('../../service/songService');

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
                resolve(parentValue, args) {
                   return songService.saveSong(args);
                }
            }
        };
    }
});

module.exports = mutation;