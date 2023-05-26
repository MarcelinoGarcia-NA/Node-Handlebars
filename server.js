const hbs = require('express-handlebars');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require("./routes");
const PORT = 4000;
const app = express();



app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main'
}));
app.set('view engine', 'hbs');



app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(routes);
app.listen(PORT, () => {
    console.log('Servidor rodando em http://localhost:' + PORT);
})


