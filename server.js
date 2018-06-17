const express = require('express');
const path = require('path');

const app = express();


var artists = [{
    id: 1,
    name: 'Olga'
},
    {
        id:2,
        name: 'Ihor'
    }];
app.get('/ping', function(req, res) {
    res.send('Pong :)');
});
app.use(express.static(path.join(__dirname, '/build')));

app.get('/art', function(req, res) {
    res.send(
        artists.map( name=>
            name.name
        )
    )
});

app.get('/art/:id', function(req, res) {
    console.log(req.params);
    var artist = artists.find(function(artist) {
        return artist.id === +(req.params.id)
    });
    res.send(artist.name);
});

app.listen(3012, function() {
    console.log('Working')
});