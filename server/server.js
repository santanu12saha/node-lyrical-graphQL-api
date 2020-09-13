require('./config/config');
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
    expressGraphQL({
        schema,
        graphiql: true,
        context: { loaders }
    })(req, res);
});

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});