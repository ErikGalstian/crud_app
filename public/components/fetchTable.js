// Fetch function that fetches and renderes the table
const fetchTable = () => {
  document.querySelector('#table').innerHTML = '';
  fetch('http://localhost:4000/api/todos')
    .then(response => response.json())
    .then(data => {
      const items = data[0];
      counter = data[1];
      console.log(items);
      items.forEach(item => {
        const newRow = `
              <tr class="item" id=${item.id}>
                  <td>${item.text}</td>
                  <td>
                      <form action="/edit" method="post">
                          <button type="submit" name="id" value="${item.id}">Edit</button>
                          <button type="button" onclick="buttonDelete(${item.id})">Delete</button>
                      </form>
                  </td>
              </tr>
          `;
        document.querySelector('#table').innerHTML += newRow;
      });
    });
};

fetchTable();
