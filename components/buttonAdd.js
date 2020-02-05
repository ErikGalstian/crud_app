const buttonAdd = () => {
  // Checking if the input is empty
  if (!document.querySelector('#input').value) {
    alert('Title field must not be empty!');
    return;
  }
  const item = {
    id: counter,
    text: document.querySelector('#input').value
  };
  fetch('http://localhost:4000/api/todos', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });
  document.querySelector('#input').value = ''; // <--- Reset the input field after adding the item
  fetchTable();
};
