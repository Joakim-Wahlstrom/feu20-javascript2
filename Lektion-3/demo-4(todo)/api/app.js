const express = require('express');
const app = express();
const cors = require('cors');
// importera controllers
const todosController = require('./controllers/todosController');

app.use(cors());
// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*")
//   res.header("Access-Control-Allow-Headers", "Content-Type, Accept, Authorization, Origin, X-Requested-With")
//   if(req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE")
//   }
//   next()
// })

// För att vi ska kunna använda JSON
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Controllers
app.use('/api/todos', todosController);

module.exports = app;