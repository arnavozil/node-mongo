const express = require('express');
const bodyParser = require('body-parser');

const { Todo } = require('./models/todo');
const { User } = require('./models/user');

const app = express();
app.use( bodyParser.json() );

app.post( '/todos', ( req, res ) => {
    const todo = new Todo({
        text: req.body.text
    })
    todo.save().then((data) => {
        res.send(data)
    }).catch((err) => {
        res.send(err)
    })
} )

app.listen( 3000, () => {
    console.log('started on port 3000');
} )