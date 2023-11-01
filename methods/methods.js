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

    return todo;
}

const removeTodo = (id) => {
    if (todoList) {
        todoList = JSON.parse(localStorage.todos).filter((item) => {
            return id !== item.id;
        });
        localStorage.setItem("todos", JSON.stringify(todoList));
    }
}

const editTodo = (id, title) => {
    if (todoList) {
        todoList = JSON.parse(localStorage.todos).map((item) => {
            return item.id === id
                ? {...item, title: title}
                : {...item, title: item.title}
        });
        localStorage.setItem("todos", JSON.stringify(todoList));
    }
}

const doneTodo = (id) => {
    if (todoList) {
        todoList = JSON.parse(localStorage.todos).map((item) => {
            return item.id === id
                ? {...item, isDone: !item.isDone}
                : {...item, isDone: false}
        });
        localStorage.setItem("todos", JSON.stringify(todoList));
    }
}

export {todoList, addTodo, removeTodo, editTodo, doneTodo};