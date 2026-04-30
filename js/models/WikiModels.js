import { CONFIG } from '../config/constants.js';

export class WikiView {
    constructor() {
        this.menuContainer = document.querySelector(CONFIG.SELECTORS.MENU_CONTAINER);
        this.contentContainer = document.querySelector(CONFIG.SELECTORS.CONTENT_CONTAINER);
    }

    renderMenu(menuItems, clickHandler) {
        this.menuContainer.innerHTML = '';
        const ul = document.createElement('ul');

        menuItems.forEach(item => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = item.title;
            button.dataset.id = item.id; // Guardamos el ID en el HTML
            
            // Cuando se hace clic, llamamos al handler que viene del Controller
            button.addEventListener('click', () => clickHandler(item.id));
            
            li.appendChild(button);
            ul.appendChild(li);
        });

        this.menuContainer.appendChild(ul);
    }

    renderArticle(article) {
        if (!article) return;
        
        // Efecto visual rápido de transición
        this.contentContainer.style.opacity = '0.5';
        setTimeout(() => {
            this.contentContainer.innerHTML = `
                <h2>${article.title}</h2>
                <div class="article-body">${article.content}</div>
            `;
            this.contentContainer.style.opacity = '1';
        }, 150);
    }

    renderError() {
        this.contentContainer.innerHTML = `<p style="color:red">${CONFIG.MESSAGES.ERROR}</p>`;
    }
}