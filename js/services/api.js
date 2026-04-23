// En un proyecto real, aquí usaríamos fetch('url-de-tu-api')
export const fetchNews = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, title: 'El auge de la Inteligencia Artificial', content: 'La IA transforma la educación universitaria...', date: '2023-10-25' },
                { id: 2, title: 'Descubrimiento en Marte', content: 'Científicos hallan nuevas evidencias de agua...', date: '2023-10-24' },
                { id: 3, title: 'Avances en computación cuántica', content: 'Un nuevo procesador rompe récords de velocidad...', date: '2023-10-23' }
            ]);
        }, 800); // Simulamos retraso de red
    });
};