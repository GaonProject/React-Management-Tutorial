const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8090;

app.use('/api/hello', (req, res) => {
    res.send({message: 'Hello Express!'});
    }
);

app.listen(port, () => console.log(`Listening on port ${port}`));