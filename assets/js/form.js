document.getElementById('blog-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const error = document.getElementById('error-message');
  
    if (!username || !title || !content) {
      error.textContent = 'Please complete all fields.';
      error.classList.remove('hidden');
      return;
    }
  
    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push({ username, title, content });
    localStorage.setItem('posts', JSON.stringify(posts));
  
    window.location.href = 'blog.html';
  });