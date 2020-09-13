const graphql = require('graphql');
const {
    GraphQLObjectType,
    GraphQLList
} = graphql;

const SongType = require('./song_type');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        songs: {
            type: new GraphQLList(SongType),
            resolve() {
                return {};
            }
        }
    })
});

module.exports = RootQueryType;