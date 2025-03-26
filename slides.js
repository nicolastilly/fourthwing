document.addEventListener("DOMContentLoaded", function () {
    // Variables pour le diaporama
    const slideshowContainer = document.querySelector('.slideshow-container');
    const slides = document.querySelectorAll('.slide');
    const buttonContainer = document.getElementById('button-container');
    const slideDuration = 10000; // 10000 ms = 10 secondes par slide
    const totalSlides = slides.length;
    let currentIndex = 0;
    let slideInterval;

    // Activation de la première slide
    slides[0].classList.add('active');

    // Fonction pour passer à la slide suivante
    function nextSlide() {
        // Retire la classe active de la slide en cours
        slides[currentIndex].classList.remove('active');

        // Passage à la slide suivante
        currentIndex++;

        // Si toutes les images ont été affichées
        if (currentIndex >= totalSlides) {
            // Fais disparaître le diaporama
            slideshowContainer.style.opacity = 0;

            // Redirection automatique vers content.html après un court délai
            setTimeout(() => {
                window.location.href = 'content.html';
            }, 1500); // Délai légèrement plus long que la transition pour assurer une sortie en fondu complète

            // Arrête le diaporama
            clearInterval(slideInterval);
            return;
        }

        // Active la nouvelle slide
        slides[currentIndex].classList.add('active');
    }

    // Démarrage du diaporama
    slideInterval = setInterval(nextSlide, slideDuration);
});