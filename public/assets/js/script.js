document.addEventListener('DOMContentLoaded', () => {
  updatePosts();
});

function updatePosts() {
  fetch('http://192.168.0.19:3000/api/all')
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      let postElements = '';

      json.forEach((post) => {
        let postElement = `<div class="card mb-4" id=${post.id}>
        <div class="card-header">
          <h5 class="card-title">${post.title}</h5>
        </div>
        <div class="card-body">
          <div class="card-text">${post.description}</div>
          <button class="delete" onclick="deletePost(this)" data-id=${post.id}>DELETE</button>
        </div>
      </div>`;

        postElements += postElement;
      });

      document.querySelector('#posts').innerHTML = postElements;
    });
}

function newPost() {
  let title = document.querySelector('#title').value;
  let description = document.querySelector('#desc').value;

  let post = { title, description };
  options = {
    method: 'POST',
    headers: new Headers({ 'content-type': 'application/json' }),
    body: JSON.stringify(post),
  };

  fetch('http://192.168.0.19:3000/api/new', options).then((res) => {
    updatePosts();
    document.querySelector('#title').value = '';
    document.querySelector('#desc').value = '';
  });
}

function deletePost(element) {
  const target = document.querySelector(`div[id="${element.getAttribute('data-id')}"]`)
  console.log(target.id)
  let endPoint = `http://192.168.0.19:3000/api/delete/${target.id}`

  options = {
    method: 'DELETE',
  };

  target.addEventListener('click', (e) => {
    fetch(endPoint, options)
      .then((res) => {
      updatePosts()
    }).catch(error => {
      console.log(error)
    });
  });
}
