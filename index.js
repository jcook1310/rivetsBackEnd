const app = require('./app')

const port = 3001

app.listen(port, function () {
    console.log('Rivet Server listening on port ' + port + '!');
});
