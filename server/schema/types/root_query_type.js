const graphql = require('graphql');
const LyricType = require('./lyric_type');
const {
    GraphQLObjectType,
    GraphQLList,
    GraphQLNonNull,
    GraphQLID
} = graphql;

const SongType = require('./song_type');

const RootQueryType = new GraphQLObjectType({
    name: 'RootQuery',
    fields: () => ({
        songs: {
            type: new GraphQLList(SongType),
            resolve(parentValue, {}, {songService}) {
                return songService.getAllSongs();
            }
        },
        song: {
            type: SongType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) }},
            resolve(parentValue, { id }, { songService }) {
                return songService.getSongById(id);
            }
        },
        lyric: {
            type: LyricType,
            args: { id: { type: new GraphQLNonNull(GraphQLID) }},
            resolve(parentValue, { id }, { lyricService}) {
                return lyricService.getLyricById(id);
            }
        }
    })
});

module.exports = RootQueryType;