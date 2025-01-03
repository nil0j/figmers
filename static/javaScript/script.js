const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Obtener el tema guardado o establecer 'dark' como valor por defecto
const currentTheme = localStorage.getItem('theme') || 'dark';

// Aplicar el tema inicial
if (currentTheme === 'light') {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
} else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
}

// Manejar el cambio de tema
toggleButton.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    }
});
