export const fetchWikiArticles = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {
                    id: 'core',
                    title: 'Gemini 3.1 Pro (Web)',
                    content: `
                        <p><strong>Gemini 3.1 Pro</strong> es el modelo fundacional subyacente que opera en el entorno web. Está diseñado para ofrecer respuestas precisas, equilibrando la empatía con la franqueza y basándose siempre en hechos y realidades.</p>
                        <p>Actualmente opera en el <em>Free tier</em> (nivel gratuito), ofreciendo capacidades avanzadas de generación de texto y soporte para tareas complejas sin costo para el usuario estándar.</p>
                    `
                },
                {
                    id: 'video',
                    title: 'Generación de Video (Modelo Veo)',
                    content: `
                        <p>Una de las capacidades generativas más destacadas es la integración con <strong>Veo</strong>, el modelo de vanguardia de Google para la generación de videos de alta fidelidad.</p>
                        <h3>Capacidades Principales de Veo:</h3>
                        <ul>
                            <li><strong>Audio Nativo:</strong> Generación de videos que incluyen audio generado nativamente junto con la imagen.</li>
                            <li><strong>Text-to-Video:</strong> Creación de escenas a partir de descripciones de texto utilizando indicaciones de audio (audio cues).</li>
                            <li><strong>Edición Avanzada:</strong> Permite extender videos existentes y generar secuencias fluidas entre un fotograma inicial y uno final especificados.</li>
                            <li><strong>Guía por Imagen:</strong> Uso de imágenes de referencia para guiar el estilo y contenido del video resultante.</li>
                        </ul>
                    `
                },
                {
                    id: 'live',
                    title: 'Gemini Live (Modo Conversacional)',
                    content: `
                        <p><strong>Gemini Live</strong> es el modo conversacional avanzado disponible para dispositivos móviles (Android e iOS). Permite una interacción de voz natural y en tiempo real.</p>
                        <h3>Características Clave:</h3>
                        <ul>
                            <li><strong>Interrupción fluida:</strong> El usuario puede interrumpir a la IA y mantener un diálogo libre sin esperar a que termine su respuesta.</li>
                            <li><strong>Cámara Compartida (Mobile):</strong> Permite compartir el flujo de la cámara del teléfono para hacer preguntas sobre el entorno físico en tiempo real.</li>
                            <li><strong>Pantalla Compartida (Mobile):</strong> Facilita la asistencia contextual sobre aplicaciones o contenido que se muestra en la pantalla del dispositivo.</li>
                            <li><strong>Análisis Multimodal:</strong> Capacidad para discutir imágenes, archivos subidos y videos de YouTube directamente en la conversación.</li>
                        </ul>
                        <p>Sus casos de uso ideales incluyen lluvia de ideas, aprendizaje de idiomas, traducción en tiempo real y asistencia guiada en pantalla.</p>
                    `
                }
            ]);
        }, 300);
    });
};