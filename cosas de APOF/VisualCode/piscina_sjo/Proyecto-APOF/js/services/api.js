export const fetchWikiArticles = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 'noticia-actualidad',
                    title: '📰 NOTICIA: Gemini 3.1 Pro revoluciona la web',
                    content: `
                        <p style="color: #5f6368; font-size: 0.9rem;"><em>Publicado: 30 de Abril de 2026</em></p>
                        <p><strong>Google ha desplegado su modelo Gemini 3.1 Pro</strong>, diseñado específicamente para optimizar la interacción en entornos web. Esta actualización marca un antes y un después en cómo las inteligencias artificiales asisten a los desarrolladores.</p>
                        <h3>Puntos clave del lanzamiento:</h3>
                        <ul>
                            <li><strong>Razonamiento avanzado:</strong> Capacidad mejorada para estructurar arquitecturas de software complejas (como MVC en Vanilla JS).</li>
                            <li><strong>Acceso universal:</strong> Operando en el nivel gratuito (Free tier), permite a estudiantes y profesionales acceder a herramientas de vanguardia sin coste.</li>
                            <li><strong>Integración multimodal:</strong> Soporte nativo para trabajar junto a modelos como Veo para generación de video de alta fidelidad.</li>
                        </ul>
                        <p>Los expertos señalan que esta versión equilibra perfectamente la empatía con la precisión técnica, corrigiendo errores de código al instante y guiando a los usuarios paso a paso en su aprendizaje.</p>
                    `
                },
                {
                    id: 'core',
                    title: 'Sobre Gemini 3.1 Pro',
                    content: `
                        <p><strong>Gemini 3.1 Pro</strong> es el modelo fundacional subyacente que opera en el entorno web. Está diseñado para ofrecer respuestas precisas, equilibrando la empatía con la franqueza y basándose siempre en hechos y realidades.</p>
                    `
                },
                {
                    id: 'live',
                    title: 'Gemini Live (Modo Conversacional)',
                    content: `
                        <p><strong>Gemini Live</strong> es el modo conversacional avanzado disponible para dispositivos móviles (Android e iOS). Permite una interacción de voz natural y en tiempo real con la capacidad de interrumpir y compartir pantalla o cámara.</p>
                    `
                }
            ]);
        }, 300);
    });
};