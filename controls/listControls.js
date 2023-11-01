import todoList from "../components/todoList/todoList.js";
import {doneTodo, editTodo, removeTodo} from "../methods/methods.js";

function initListControls() {
    const listItems = document.querySelectorAll(".list__item");

    listItems.forEach((item) => {
        initListItemControls(item);
    })
}

function initListItemControls(elem) {
    function onRemove(e) {
        removeTodo(e.target.dataset.id);
        // todoList();
    }

    function onEdit(e) {
        const title = elem.querySelector(".list__item--edit .input");
        const btn = elem.querySelector(".list__item--edit .btn");

        elem.classList.add("is-edit");

        btn.addEventListener("click", () => {
            elem.classList.remove("is-edit");
            editTodo(e.target.dataset.id, title.value);
        })
        // todoList();
    }

    function onDone(e) {
        doneTodo(e.target.dataset.id);
        // todoList();
        elem.classList.toggle("is-done");
    }

    elem.querySelector(".btn-remove").addEventListener("click", onRemove);
    elem.querySelector(".btn-edit").addEventListener("click", onEdit);
    elem.querySelector(".btn-done").addEventListener("click", onDone);
}

export {initListControls, initListItemControls};