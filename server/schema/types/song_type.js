const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
} = graphql;

const SongType = new GraphQLObjectType({
    name: 'Song',
    fields: () => {
        const LyricType = require('./lyric_type');
        return {
            id: { type: GraphQLID },
            title: { type: GraphQLString },
            lyrics: {
                type: new GraphQLList(LyricType),
                resolve(parentValue) {

                }
            }
        };
    }
});

module.exports = SongType;