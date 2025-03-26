const postsContainer = document.getElementById('post-list');
const posts = JSON.parse(localStorage.getItem('posts')) || [];

posts.forEach(post => {
  const postEl = document.createElement('article');
  postEl.className = 'blog-post';

  postEl.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.content}</p>
    <p><strong>Author:</strong> ${post.username}</p>
  `;

  postsContainer.appendChild(postEl);
});