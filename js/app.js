import { WikiModel } from './models/WikiModel.js';
import { WikiView } from './views/WikiView.js';
import { WikiController } from './controllers/WikiController.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new WikiModel();
    const view = new WikiView();
    // Al instanciar el controlador, arranca toda la aplicación
    const app = new WikiController(model, view); 
});