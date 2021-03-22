var express=require('express');
var app=express();

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true}));

const formsController=require('./controllers/formsController');

//Homepage
app.get('/',formsController.get_homepage);

//Login
app.get('/Login',formsController.get_login);
app.post('/Login',formsController.post_login);

//Report Item
app.get('/Report',formsController.get_report);
app.post('/Report',formsController.post_report);

//SignUp
app.get('/Signup',formsController.get_signup);
app.post('/Signup',formsController.post_signup);

//Available Items
app.get('/Available_items',formsController.get_Available_items);
app.post('/Available_items',formsController.post_Available_items);

app.listen(3000);