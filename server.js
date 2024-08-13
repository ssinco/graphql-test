/*
=============== SETUP =============== */

const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path')
const graphqlHTTP = require('express-graphql')

const PORT = process.env.PORT || 3000;



/*
--------------- Middleware --------------- */
app.use(cors());
app.use(express.json());
// Insert the express.static for deployment
app.use('/graphql', graphqlHTTP({

}))

/*
=============== Routes =============== */

app.get('/', (req, res) => {
    res.send('this is the homepage from graphql test')
})

app.listen(PORT, () => {``
    console.log(`Server is running on http://localhost:${PORT}`);
  });