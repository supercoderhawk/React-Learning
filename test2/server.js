var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var COMMENT_FILE = path.join(__dirname, 'comments.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/comments', function(req,res){
    fs.readFile(COMMENT_FILE, function(err, data){
        if(err){
            console.error(err);
            process.exit(1);
        }
        res.json(JSON.parse(data));
    });
});

app.post('/api/comments', function(req, res){
    fs.readFile(COMMENT_FILE, function(err, data){
        if(err){
            console.error(err);
            process.exit(1);
        }
        var comments = JSON.parse(data);
        var newComment = {
            id: Date.now(),
            author: req.body.author,
            text:   req.body.text,
        };
        comments.push(newComment);
        fs.writeFile(COMMENT_FILE, JSON.stringify(comments, null, 4), function(err){
            if(err){
                console.log(err);
                process.exit(1);
            }
            res.json(comments);
        });
    });
});

app.listen(app.get('port'), function(){
    console.log('Server started: http://localhost:' + app.get('port') + '/');
});