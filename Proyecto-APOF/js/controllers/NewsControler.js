export class NewsController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        // Conectar el botón de la vista con la función de carga del controlador
        this.view.bindLoadNews(this.handleLoadNews.bind(this));
    }

    // Usamos arrow function o .bind() para no perder el contexto de 'this'
    async handleLoadNews() {
        try {
            const news = await this.model.loadNews();
            this.view.renderNews(news);
        } catch (error) {
            this.view.renderError();
        }
    }
}