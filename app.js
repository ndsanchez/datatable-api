const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes')

const app = express();

const PORT = (process.env.PORT || 5000);

app.use((req,res, next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API_KEY, Origin, X-Requested-With, Content-Type, Access, Access-Control-Allow-Request');
    res.header('Access-Control-Allow-Methos','GET, POST, PUT, DELETE, OPTIONS');
    res.header('Allow','GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/datatable',routes);

app.listen(PORT, () =>{
    console.log(`Server running on port ${PORT}`)
});