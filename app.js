var express = require('express');
var app = express();

var mongoose = require('mongoose');
mongoose.connect('mongodb://felipe:felipe123@ds117868.mlab.com:17868/larg', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
});

var postSchema = new mongoose.Schema({
    title: String 
});

var Post = new mongoose.model('Post', postSchema, 'posts');

app.get('/posts/:id', function(req, res){

});

app.post('/posts', function(req, res){

});

app.get('/posts', function(req, res){
    Post.find({}).lean().exec((err, posts) => {
        res.json(posts.map(p => p.title));
    });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});