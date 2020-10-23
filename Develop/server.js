const express = require("express");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000;
console.log("hi")

require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);

app.listen(PORT, function (){
  console.log("listening on port: " + PORT)
})


