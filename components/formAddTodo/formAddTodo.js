import todoList from "../todoList/todoList.js";
import { addTodo } from "../../methods/methods.js";

import './formAddTodo.scss';


window.addEventListener("DOMContentLoaded", () => {
       const btnAdd = document.querySelector(".form__btn");
       const title = document.querySelector(".form__input");
       const list = document.querySelector(".list");

       btnAdd.addEventListener("click", (e) => {
              addTodo(title.value);
              list.innerHTML = todoList();
              title.value = "";
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
                <input type="text" name="title" class="form__input">
                <button class="btn" disabled>add</button>
           </div>
       `)
}

export default formAddTodo;