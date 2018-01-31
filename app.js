var express = require('express');
var bodyParser = require('body-parser')
var validator = require('express-validator')
var app = express();
var Rivet = require('./models').Rivet

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(validator())


//allows page to load without crashing
app.get('/', (req, res) => {
    res.json({message: 'API Example App'})
});

//checks the rivets in index
app.get('/rivets', (req, res) => {
    Rivet.findAll().then((rivets) => {
        res.json({
            rivets: rivets
        })
    })
})

//allows user to add rivet info
app.post('/rivets', (req, res) => {
    req.checkBody('title', 'Is required').notEmpty()
    req.checkBody('summary', 'Is required').notEmpty()
    req.checkBody('description', 'Is required').notEmpty()

    req.getValidationResult()
    .then((validationErrors) => {
        if(validationErrors.isEmpty()){
            Rivet.create({
                title: req.body.title,
                summary: req.body.summary,
                description: req.body.description
            }).then((rivet) => {
                res.status(201)
                res.json({rivet: rivet})
            })
        }else{
            res.status(400)
            res.json({errors: {validations: validationErrors.array()}})
        }
    })
})

module.exports = app
