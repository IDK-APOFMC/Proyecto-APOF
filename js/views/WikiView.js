import { CONFIG } from '../config/constants.js';

export class NewsView {
    constructor() {
        this.container = document.querySelector(CONFIG.SELECTORS.NEWS_CONTAINER);
        this.btnLoad = document.querySelector(CONFIG.SELECTORS.BTN_LOAD);
    }

    // Vincula el evento de la vista con la función del controlador
    bindLoadNews(handler) {
        this.btnLoad.addEventListener('click', () => {
            this.renderLoading();
            handler();
        });
    }

    renderLoading() {
        this.container.innerHTML = '<p class="loading-msg">Cargando actualidad...</p>';
    }

    renderNews(newsArray) {
        this.container.innerHTML = ''; // Limpiamos contenedor
        
        if (newsArray.length === 0) {
            this.container.innerHTML = `<p>${CONFIG.MESSAGES.NO_NEWS}</p>`;
            return;
        }

        newsArray.forEach(newsItem => {
            const article = document.createElement('article');
            article.className = 'news-card';
            article.innerHTML = `
                <h2>${newsItem.title}</h2>
                <p class="date">${new Date(newsItem.date).toLocaleDateString()}</p>
                <p>${newsItem.content}</p>
            `;
            this.container.appendChild(article);
        });
    }

    renderError() {
        this.container.innerHTML = `<p class="error-msg">${CONFIG.MESSAGES.ERROR_LOAD}</p>`;
    }
}