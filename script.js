document.addEventListener('DOMContentLoaded', (event) => {
    // Initialize Lucide icons
    lucide.createIcons();

    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const app = document.getElementById('app');
    const moonIcon = `<i data-lucide="moon"></i>`;
    const sunIcon = `<i data-lucide="sun"></i>`;

    themeToggle.addEventListener('click', () => {
        app.classList.toggle('dark-mode');
        if (app.classList.contains('dark-mode')) {
            themeToggle.innerHTML = sunIcon;
        } else {
            themeToggle.innerHTML = moonIcon;
        }
        lucide.createIcons();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

