const express = require('express');
const router = express.Router();
const cors = require('cors');
const posts = require('../model/posts');
const { newPost } = require('../model/posts');

const options = {
  origin: 'http://localhost:3000',
};

router.use(cors(options));

router.get('/all', (req, res) => {
  res.send(JSON.stringify(posts.getAll()));
});

router.post('/new', (req, res) => {
  let title = req.body.title;
  let description = req.body.description;

  posts.newPost(title, description);

  res.send('Post adicionado');
});

router.delete('/delete/:id', (req, res) => {
  let id = req.params.id;

  posts.deletePost(id);
  res.send(`${id} deletado com sucesso!`);
});

module.exports = router;
