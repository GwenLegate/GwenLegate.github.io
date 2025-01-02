// Smooth Scroll for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Check if the link is an internal link (starts with '#')
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();  // Only prevent default for internal links

            // Smooth scroll behavior for internal navigation
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});