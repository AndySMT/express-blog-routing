// importo express e creo un router
const express = require("express");
const route = express.Router();
// importo i dati dei post
const posts = require("../dataBase/postsData");

//! ******all routes have "/posts" prefix******

//9. create a route for the posts page that returns the posts data, also add a query parameter to filter posts by tag
route.get("/", (req, res) => {
  const tag = req.query.tag; // Legge il parametro di query 'tag'
  if (tag) {
    // Filtra i post in base al tag
    const filteredPosts = posts.filter((post) => post.tag.includes(tag));
    if (filteredPosts.length > 0) {
      res.json({ lunghezza: filteredPosts.length, posts: filteredPosts }); // Restituisce i post trovati
    } else {
      res.status(404).send(`<i>Nessun post trovato con il tag:</i> <b>${tag}`);
    }
  } else {
    // Se non c'è un tag, restituisce tutti i post
    res.json({ lunghezza: posts.length, posts: posts });
  }
});

// gestisco le richeste in arrivo con metodo GET
//! es.path: /posts/:id - posts/1 , posts/2, ...
route.get("/:id", (req, res) => {
  const id = parseInt(req.params.id); // convert string to number and whit req.params.id I get the id from the url
  const filtredID = posts.find((e) => e.id === id); // find post by id
  res.json(filtredID);
});

// gestisco le richeste in arrivo con metodo POST
route.post("/", (req, res) => {
  res.send("Posts page");
});
// gestisco le richeste in arrivo con metodo PUT
route.put("/:id", (req, res) => {
  res.send("Post page");
});
// gestisco le richeste in arrivo con metodo PATCH
route.patch("/:id", (req, res) => {
  res.send("Post page");
});
// gestisco le richeste in arrivo con metodo DELETE
route.delete("/:id", (req, res) => {
  res.send("Post page");
});

module.exports = route;
