import viteLogo from '/vite.svg';

import './header.scss';

const header = () => {
       return (`
           <header class="header">
                <img src="${viteLogo}" alt="logo" width="32" height="32" class="header__logo">
                <h1 class="header__title">TodoList</h1>
           </header>
       `)
};

export default header;