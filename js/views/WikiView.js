import { CONFIG } from '../config/constants.js';

// ✅ Corregido: Sin paréntesis y con los selectores correctos
export class WikiView {
    constructor() {
        this.menuContainer = document.querySelector(CONFIG.SELECTORS.MENU_CONTAINER);
        this.contentContainer = document.querySelector(CONFIG.SELECTORS.CONTENT_CONTAINER);
    }

    // Dibuja el menú lateral
    renderMenu(menuItems, onMenuItemClick) {
        if (!this.menuContainer) return;
        
        this.menuContainer.innerHTML = '';
        const ul = document.createElement('ul');

        menuItems.forEach(item => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            
            button.textContent = item.title;
            button.className = 'menu-link';
            
            // ✅ Esta es la conexión: al hacer click, avisamos al controlador
            button.onclick = () => onMenuItemClick(item.id);
            
            li.appendChild(button);
            ul.appendChild(li);
        });

        this.menuContainer.appendChild(ul);
    }

    // Dibuja el artículo central
    renderArticle(article) {
        if (!this.contentContainer || !article) return;
        
        // Pequeña transición de opacidad para que parezca profesional
        this.contentContainer.style.opacity = '0';
        
        setTimeout(() => {
            this.contentContainer.innerHTML = `
                <article>
                    <h2>${article.title}</h2>
                    <div class="wiki-text">
                        ${article.content}
                    </div>
                </article>
            `;
            this.contentContainer.style.opacity = '1';
        }, 100);
    }

    renderError(msg) {
        if (this.contentContainer) {
            this.contentContainer.innerHTML = `<p class="error">${msg}</p>`;
        }
    }
}