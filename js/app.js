import { NewsModel } from './models/NewsModel.js';
import { NewsView } from './views/NewsView.js';
import { NewsController } from './controllers/NewsController.js';

// Inicialización de la arquitectura cuando el DOM está listo
document.addEventListener('DOMContentLoaded', () => {
    const model = new NewsModel();
    const view = new NewsView();
    const app = new NewsController(model, view);
});