require('./config/config');
require('./db/mongo-db');
const express = require('express');
const bodyParser = require('body-parser');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema');

const port = process.env.PORT;

const app = express();
app.use(bodyParser.json());

app.use('/graphql', (req, res) => {
    const loaders = {

    };
    const songService = require('./service/songService');
    const lyricService = require('./service/lyricService');
    expressGraphQL({
        schema,
        graphiql: true,
        context: { songService, lyricService, loaders }
    })(req, res);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});