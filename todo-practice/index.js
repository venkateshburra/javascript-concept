const addForm = document.querySelector('.form_user');

const list = document.querySelector('ul');

const searchTodo = document.querySelector('.search');

// const searchTodo = document.querySelector('.search_input');


function todo(todo) {
  let html = `
  <li>
    <span>${todo}</span>
    <i class="far fa-trash-alt delete"></i>
  </li>
  `;

  list.innerHTML += html;
}

addForm.addEventListener('submit', e => {
  e.preventDefault();

  let newTodo = addForm.username.value;

  if(newTodo.length) {
    todo(newTodo);
    addForm.reset();
    searchTodo.style.display = 'block';
  }

});

list.addEventListener('click', e => {
  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
    if (list.children.length === 0) {
      searchTodo.style.display = 'none';
    }
  }
});

const filterTodos = (term) => {
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add('filterd'));

    Array.from(list.children)
    .filter(todo => todo.textContent.includes(term))
    .forEach(todo => todo.classList.remove('filterd'));
}

searchTodo.addEventListener('keyup', e => {
  let term = searchTodo.searchName.value.toLowerCase().trim();
  filterTodos(term);
})
