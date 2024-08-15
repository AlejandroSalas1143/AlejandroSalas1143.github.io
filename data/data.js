document.addEventListener('DOMContentLoaded', function() {
    // Desactiva transiciones al cargar la página
    document.body.classList.add('no-transition');
    
    // Verifica si hay un tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        document.body.classList.add(savedTheme);
    }

    // Después de un breve retraso, elimina la clase 'no-transition'
    setTimeout(function() {
        document.body.classList.remove('no-transition');
    }, 100);

    const themeToggle = document.getElementById('theme-toggle');

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        
        // Guarda el estado del tema en localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('theme', 'dark-mode');
        } else {
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
