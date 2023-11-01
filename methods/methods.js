let todoList = window.localStorage.getItem('todos');

const addTodo = (title) => {
    const todo = {
        id: title + Math.random(),
        title: title,
        isDone: false,
        isEdit: false,
    }

    if (!todoList) {
        window.localStorage.setItem('todos', '');
        todoList = [];
        todoList.push(todo);
        localStorage.setItem("todos", JSON.stringify(todoList));
    } else {
        todoList = JSON.parse(localStorage.todos);
        todoList.push(todo);
        localStorage.setItem("todos", JSON.stringify(todoList));
    }
}

export {todoList, addTodo};