import { fetchNews } from '../services/api.js';

export class NewsModel {
    constructor() {
        this.news = []; // Estado de la aplicación
    }

    async loadNews() {
        try {
            const data = await fetchNews();
            this.news = data;
            return this.news;
        } catch (error) {
            console.error("Error en Model:", error);
            throw error;
        }
    }

    getNews() {
        return this.news;
    }
}