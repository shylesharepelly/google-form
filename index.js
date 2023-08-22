
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({extended:false}));
app.set("view engine","ejs");
const path = require('path');


app.set("views", path.join(__dirname, "views"));




app.listen(3000, () => {
  console.log("Started express server at port 3000");
});



app.get("/",async  function (request, response) {
      response.render("index");
    
  });

  app.post('/submit', (req, res) => {
    console.log('Form Data:', req.body);
    res.send('Response has been recorded!');
});


