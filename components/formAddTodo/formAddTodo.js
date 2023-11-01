import todoList from "../todoList/todoList.js";
import { initListItemControls } from "../../controls/listControls.js";
import { addTodo } from "../../methods/methods.js";

import './formAddTodo.scss';


window.addEventListener("DOMContentLoaded", () => {
       const btnAdd = document.querySelector(".form__btn");
       const title = document.querySelector(".form__input");

       btnAdd.addEventListener("click", (e) => {
              const newItem = addTodo(title.value);
              todoList();
              title.value = "";
              const newItemElement = document.querySelector(`[data-item-id="${newItem.id}"]`);
              initListItemControls(newItemElement);
       });

       title.addEventListener("input", () => {
              if (title.value.length === 0) {
                     btnAdd.disabled = true;
              } else {
                     btnAdd.disabled = false;
              }
       })
})

const formAddTodo = () => {
       return (`
           <div class="form">
                <input type="text" name="title" class="input form__input">
                <button class="btn form__btn" disabled>add</button>
           </div>
       `)
}

export default formAddTodo;