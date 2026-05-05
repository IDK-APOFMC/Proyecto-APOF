// js/app.js
import { WikiModel } from './models/WikiModel.js';
import { WikiView } from './views/WikiView.js';
import { WikiController } from './controllers/WikiController.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new WikiModel();
    const view = new WikiView();
    // Aquí es donde arranca la lógica:
    const app = new WikiController(model, view); 
});