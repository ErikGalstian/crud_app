// Function that adds a button
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
  // POST - add an item
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

// Function that deletes an item
const buttonDelete = id => {
  const item = {
    id: id,
    text: document.querySelector('#input').value
  };
  // DELETE - delete an item
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

// Fetch function that fetches and renderes the table
const fetchTable = () => {
  document.querySelector('#table').innerHTML = '';
  fetch('http://localhost:4000/api/todos')
    .then(response => response.json())
    .then(data => {
      const items = data[0];
      counter = data[1];
      console.log(items);
      for (i = 0; i < items.length; i++) {
        const newRow = `
            <tr class="item" id=${items[i].id}>
                <td>${items[i].text}</td>
                <td>
                    <form action="/edit" method="post">
                        <button type="submit" name="id" value="${items[i].id}">Edit</button>
                        <button type="button" onclick="buttonDelete(${items[i].id})">Delete</button>
                    </form>
                </td>
            </tr>
        `;
        document.querySelector('#table').innerHTML += newRow;
      }
    });
};

fetchTable();
