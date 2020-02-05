// Function that edits an item
const buttonEdit = id => {
  const item = {
    id: id,
    text: document.querySelector('#input').value
  };
  fetch('http://localhost:4000/api/todos', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });
  window.location.replace('http://localhost:4000'); // Redirect to homepage
};
