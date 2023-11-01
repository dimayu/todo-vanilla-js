import {initListControls} from "../../controls/listControls.js";

import editIcon from '/edit.svg';
import doneIcon from '/done.svg';
import removeIcon from '/remove.svg';

import './todoList.scss';

const todoList = () => {
    const isTodos = window.localStorage.getItem('todos');
    const list = document.querySelector(".list");

    if (!isTodos) {
        return `<h3>Add Todo</h3>`
    } else {
        const todos = JSON.parse(isTodos);

        list.innerHTML = todos.map((item) => {
            return (
                    `<li class="list__item" data-item-id="${item.id}">
                            <div class="list__item--edit">
                                <input type="text" value="${item.title}" class="input">
                                <button class="btn">save</button>
                            </div>
                            <div class="list__item--default">
                                <span>${item.title}</span>
                                <div class="list__item__btns">
                                    <button class="btn btn-edit" data-id="${item.id}">
                                        <img src="${editIcon}" alt="edit" width="12" height="12">
                                    </button>
                                    <button class="btn btn-done" data-id="${item.id}">
                                        <img src="${doneIcon}" alt="done" width="16" height="16">
                                    </button>
                                    <button class="btn btn-remove" data-id="${item.id}">
                                        <img src="${removeIcon}" alt="remove" width="16" height="16">
                                    </button>
                                </div>
                            </div>
                        </li>`
            )
        }).join("")
    }
};

window.addEventListener("DOMContentLoaded", () => {
    todoList();
    initListControls();
});

export default todoList;
