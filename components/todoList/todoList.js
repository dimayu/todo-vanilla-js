import editIcon from '/edit.svg';
import doneIcon from '/done.svg';
import removeIcon from '/remove.svg';

import './todoList.scss';

const todoList = () => {
    const isTodos = window.localStorage.getItem('todos');

    if (!isTodos) {
        return `<h3>Add Todo</h3>`
    } else {
        const todos = JSON.parse(isTodos);

        return todos.map((item) => {
                return (
                    item.isDone ?
                        `<li class="list__item list__item--done">
                            <span>${item.title}</span>
                            <div class="list__item__btns">
                                <button class="btn btn-done">
                                    <img src="${doneIcon}" alt="done" width="16" height="16">
                                </button>
                                <button class="btn btn-remove">
                                    <img src="${removeIcon}" alt="remove" width="16" height="16">
                                </button>
                            </div>
                        </li>` :
                        `<li class="list__item">
                            <span>${item.title}</span>
                            <div class="list__item__btns">
                                <button class="btn btn-edit">
                                    <img src="${editIcon}" alt="edit" width="12" height="12">
                                </button>
                                <button class="btn btn-done">
                                    <img src="${doneIcon}" alt="done" width="16" height="16">
                                </button>
                                <button class="btn btn-remove">
                                    <img src="${removeIcon}" alt="remove" width="16" height="16">
                                </button>
                            </div>
                        </li>`
                )
        })
    }
};

export default todoList;
