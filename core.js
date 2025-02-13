// ./js/core.js
document.addEventListener('DOMContentLoaded', function() {

    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
    });

    // Topic Blocks (Обработчик для всех блоков)
    document.querySelectorAll('.topic-block').forEach(block => {
        const header = block.querySelector('.topic-header');
        header.addEventListener('click', () => {
            block.classList.toggle('active');
        });
    });


document.querySelectorAll('.tema-block').forEach(block => {
    const header = block.querySelector('.tema-header');
    header.addEventListener('click', () => {
        block.classList.toggle('active');
    });
});
});