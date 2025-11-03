import { initSPA } from './spa.js';
import { validateForm } from './formValidation.js';

document.addEventListener('DOMContentLoaded', () => {
    initSPA(); // Inicializa SPA básico
    validateForm(); // Aplica validação avançada nos formulários
});
