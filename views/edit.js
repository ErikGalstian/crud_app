const buttonEdit = id => {
  const item = {
    id: id,
    text: document.querySelector('#input').value
  };
  fetch('http://localhost:4000/edit/update', {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  });
  window.location.replace('http://localhost:4000'); // Redirect to homepage
};
