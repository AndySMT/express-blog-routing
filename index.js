const express = require("express"); //1. Import express
const app = express(); //2. create instance of express
const port = 3000; //3. Define port number
const posts = require("./dataBase/postsData"); //5. Import posts data

app.use(express.static("public")); //6. Serve static files

app.get("/", (req, res) => {
  res.send("<h1>Il mio blog</h1>");
}); //7. Create a route for the home page

app.listen(port, () => {
  console.log(`Server is running on 127.0.0.1:${port}`);
}); //4.  Start server
