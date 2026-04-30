// ✅ Corregido: Lógica de inicialización automática
export class WikiController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        
        // Arrancamos la aplicación nada más crearse el controlador
        this.init();
    }

    async init() {
        try {
            // 1. Pedimos al modelo que cargue los datos del servicio
            await this.model.loadData();
            
            // 2. Obtenemos los títulos para el menú
            const menuData = this.model.getArticlesMenu();
            
            // 3. Decimos a la vista que pinte el menú
            // Pasamos 'handleArticleChange' como la función que se ejecutará al pulsar
            this.view.renderMenu(menuData, (id) => this.handleArticleChange(id));

            // 4. Cargamos el primer artículo (la noticia) por defecto
            if (menuData.length > 0) {
                this.handleArticleChange(menuData[0].id);
            }

        } catch (error) {
            this.view.renderError("Error al inicializar la Wiki de Gemini.");
        }
    }

    // Esta función se ejecuta cada vez que el usuario pulsa un botón del menú
    handleArticleChange(articleId) {
        const article = this.model.getArticleById(articleId);
        this.view.renderArticle(article);
    }
}