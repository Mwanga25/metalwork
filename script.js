// Lightbox Effect
document.querySelectorAll('.service-img').forEach((img) => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        document.body.appendChild(lightbox);

        const imgElement = document.createElement('img');
        imgElement.src = img.src;
        lightbox.appendChild(imgElement);

        // Ondoa Lightbox Unapobofya Nje
        lightbox.addEventListener('click', () => {
            lightbox.remove();
        });
    });
});

// Smooth Scroll
document.querySelectorAll('nav ul li a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
        });
    });
});