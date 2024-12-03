//1. Import express
const express = require("express");
//2. create instance of express
const app = express();
//3. Define port number
const port = 3000;
//8. Import posts data
const posts = require("./dataBase/postsData");
//5. Serve static files
app.use(express.static("public"));
//7. Create a route for the home page
app.get("/", (req, res) => {
  res.send("<h1>Mio blog</h1>");
});
//9. Create a "/bacheca" route for the posts page that returns the posts data, also add a query parameter to filter posts by tag
app.get("/bacheca", (req, res) => {
  const tag = req.query.tag; // Legge il parametro di query 'tag'
  if (tag) {
    // Filtra i post in base al tag
    const filteredPosts = posts.filter((post) => post.tag.includes(tag));
    if (filteredPosts.length > 0) {
      res.json(filteredPosts); // Restituisce i post trovati
    } else {
      res.status(404).send(`<i>Nessun post trovato con il tag:</i> <b>${tag}`);
    }
  } else {
    // Se non c'è un tag, restituisce tutti i post
    res.json(posts);
  }
});
//6. Create a route for unexpected requests whit 404 status code
app.get("*", (req, res) => {
  res.status(404).send("<h1>Error 404: Page Not Found</h1>");
});
//4.  Start server
app.listen(port, () => {
  console.log(`Server is running on 127.0.0.1:${port}`);
});
