// Function that deletes an item
const buttonDelete = id => {
  const item = {
    id: id,
    text: document.querySelector('#input').value
  };
  fetch('http://localhost:4000/api/todos', {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });
  fetchTable();
};
