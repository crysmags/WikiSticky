var express = require('express');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');
var nunjucks = require('nunjucks');
var path = require('path');
var models = require('./models');
var routes=require('./routes');


var route = models.Page.urlTitle;
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '/public')));
app.use(routes);

//syncing/integrating tables w/app + server
models.db.sync({force:true})
.then(()=>{
    console.log('Page Table created!');
    app.listen(3000, ()=>{
        console.log('Server is listening on port 3000!');
    })
})
.catch(console.error.bind(console));
//why are we binding here? 


const env = nunjucks.configure('views', {noCache: true});

app.set('view engine', 'html');
app.engine('html', nunjucks.render);


