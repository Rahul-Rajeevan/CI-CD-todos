document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todo-list');
    const addButton = document.getElementById('add-button');
    const newTodoInput = document.getElementById('new-todo');
  
    addButton.addEventListener('click', function() {
      const todoText = newTodoInput.value.trim();
      if (todoText !== '') {
        addTodoItem(todoText);
        newTodoInput.value = '';
      }
    });
  
    function addTodoItem(text) {
      const li = document.createElement('li');
      li.textContent = text;
      todoList.appendChild(li);
    }
  });
  