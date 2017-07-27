const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator')
const app = express()

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(bodyParser.urlencoded({extended:false}))
app.use(expressValidator())

app.use(express.static('public'))

app.get("/", (req, res) => {
  console.log("hello")
  res.render('home')
})

app.post("/", (req, res) => {
  console.log("body", req.body);
  res.render('result', {
    birthyear: req.body.birthyear,
    email: req.body.email,
    fullName: req.body.fullName,
    password: req.body.password,
    position: req.body.position,
  });
});

app.listen(3000, () => {
  console.log('Listening on port 3000')
});
