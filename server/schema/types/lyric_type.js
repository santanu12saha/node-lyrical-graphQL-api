const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLInt,
    GraphQLString
} = graphql;

const LyricType = new GraphQLObjectType({
    name: 'Lyric',
    fields: () => {
        const SongType = require('./song_type');
        return {
            id: { type: GraphQLID },
            likes: { type: GraphQLInt },
            content: { type: GraphQLString },
            song: {
                type: SongType,
                resolve(parentValue) {

                }
            }
        };
    }
});

module.exports = LyricType;