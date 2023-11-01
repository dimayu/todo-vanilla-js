import './style.scss';

import header from './components/header/header.js';
import formAddTodo from './components/formAddTodo/formAddTodo.js';
import todoList from "./components/todoList/todoList.js";

const render = () => {
    document.querySelector('#app').innerHTML = `
      <div class="body">
        ${header()}
        ${formAddTodo()}
        <ul class="list">
        </ul>
      </div>
    `;
}

render();

export default render;