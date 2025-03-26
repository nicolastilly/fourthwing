document.addEventListener("DOMContentLoaded", function () {
    // Variables globales pour le diaporama
    const slideshowContainer = document.querySelector('.slideshow-container');
    const slides = document.querySelectorAll('.slide');
    const buttonContainer = document.getElementById('button-container');
    let currentIndex = 0;
    let cycleCount = 0;
    const slideDuration = 10000; // 5000 ms = 5 secondes par slide
    const totalSlides = slides.length;

    // Désactiver toutes les slides pour éviter que l'animation ne démarre prématurément
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Gestion du loader vidéo
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = "none";

            // Activation de la première slide APRÈS la disparition complète du loader
            slides[0].classList.add('active');

            // Démarrage du diaporama uniquement après la vidéo de chargement
            startSlideshow();
        }, 800); // Durée de transition du fondu (1s)
    }, 5000); // La vidéo est affichée pendant 5 secondes

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

            // Affiche le bouton après que le diaporama ait disparu
            setTimeout(() => {
                buttonContainer.classList.add('visible');
            }, 1000);

            // Arrête le diaporama
            clearInterval(slideInterval);
            return;
        }

        // Active la nouvelle slide
        slides[currentIndex].classList.add('active');
    }

    // Variable pour stocker l'intervalle
    let slideInterval;

    // Fonction pour démarrer le diaporama avec un délai
    function startSlideshow() {
        // Démarrage de l'intervalle pour passer d'une slide à l'autre
        slideInterval = setInterval(nextSlide, slideDuration);
    }
});