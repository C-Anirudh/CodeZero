const app = require('express')();
const bodyParser = require('body-parser');
const mongo = require('mongodb').MongoClient;
const port = process.env.PORT || 5000;
const login = require('./login');
const signup = require('./signup');
uri='';

url = '0.0.0.0';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true, }));
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req ,res) => {
    res.send('Serving backend at host => '+url+' port => '+port);
})

app.post('/login', (req, res) => {
    login.checkLogin(req, res);
})
app.get('/saveArticle', (req, res) => {
    let obj = req.query.object;
    mongo.connect('')
})

app.post('/signup', (req, res) => {
    signup.checkSignup(req,res)
})

const server = app.listen(port, url,(e) => {
    if(e) throw e;
    else {
        console.log('Running at \n'+server.address().address + '\t' +server.address().port);
    }
})

