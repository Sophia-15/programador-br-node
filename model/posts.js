module.exports = {
  posts: [
    {
      id: ';lakjf',
      title: 'Teste de Post',
      description: 'Descrição teste',
    },
  ],

  getAll() {
    return this.posts;
  },

  newPost(title, description) {
    this.posts.push({ id: generateId(), title, description });
  },

  deletePost(id) {
    this.posts.forEach((item, i) => {
      if (item.id == id) {
        this.posts.splice(i, 1);
      }
      console.log(this.posts);
    });
  },
};

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
