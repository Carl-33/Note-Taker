const express = require("express");
const path = require("path");


const app = express();
const PORT = process.env.PORT || 3000;
console.log("hi") 

app.use(express.static('public'));




// app.get("/", function(req, res) {
//   res.sendFile(path.join(__dirname, "public/index.html"));
// });

// app.get("/notes", function(req, res) {
//   res.sendFile(path.join(__dirname, "public/notes.html"));
// });
app.get("/api/notes", function(req, res) {
  res.sendFile(path.join(__dirname, "db/db.json"));
});


require('./routing/api-routes.js')(app);
require('./routing/html-routes.js')(app);




app.listen(PORT, function (){
  console.log("listening on port: " + PORT)
})



