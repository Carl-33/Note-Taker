const express = require("express");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000;
console.log("hi") 

app.use(express.static('public'));



const apiRoutes = require('./routing/api-routes.js')(app);
const htmlRoutes = require('./routing/html-routes.js')(app);


app.listen(PORT, function (){
  console.log("listening on port: " + PORT)
})



