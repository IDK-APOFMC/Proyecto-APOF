export class WikiController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.init();
    }

    async init() {
        try {
            await this.model.loadData();
            
            // 1. Obtener lista para el menú y dibujarlo
            const menuData = this.model.getArticlesMenu();
            this.view.renderMenu(menuData, this.handleMenuClick.bind(this));

            // 2. Cargar el primer artículo por defecto
            if (menuData.length > 0) {
                this.handleMenuClick(menuData[0].id);
            }
        } catch (error) {
            console.error("Error inicializando la Wiki:", error);
            this.view.renderError();
        }
    }

    handleMenuClick(articleId) {
        // Le pedimos al modelo el artículo específico y le decimos a la vista que lo pinte
        const article = this.model.getArticleById(articleId);
        this.view.renderArticle(article);
    }
}