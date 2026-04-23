// Simulamos la llamada a un servidor real (Fetch)
export const fetchNews = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { 
                    id: 1, 
                    title: 'Google revoluciona la asistencia virtual con Gemini 3.1 Pro', 
                    content: 'El ecosistema web recibe la última actualización del modelo fundacional de Google, Gemini 3.1 Pro. Diseñado específicamente para entornos web, este modelo multimodal avanzado destaca por su alta capacidad de razonamiento lógico, generación de código y su integración nativa con herramientas de creación de imágenes y video de alta fidelidad. Los desarrolladores ya están explorando sus capacidades conversacionales en tiempo real.', 
                    date: '2026-04-23' 
                }
                // Si quieres añadir más, solo tienes que poner una coma y agregar otro objeto aquí
            ]);
        }, 800); // Simulamos un retraso de red de 800ms para que se vea el "Cargando..."
    });
};