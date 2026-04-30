import { fetchWikiArticles } from '../services/api.js';

// ✅ Corregido: Sin paréntesis en la definición de la clase
export class WikiModel {
    constructor() {
        this.articles = [];
        this.currentArticle = null;
    }

    async loadData() {
        try {
            this.articles = await fetchWikiArticles();
            return this.articles;
        } catch (error) {
            console.error("Error en WikiModel:", error);
            throw error;
        }
    }

    getArticlesMenu() {
        // Devolvemos solo lo necesario para el menú (id y título)
        return this.articles.map(article => ({
            id: article.id,
            title: article.title
        }));
    }

    getArticleById(id) {
        this.currentArticle = this.articles.find(article => article.id === id);
        return this.currentArticle;
    }
}