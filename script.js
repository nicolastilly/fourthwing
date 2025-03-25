document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const slideDuration = 5000; // 5000 ms = 5 secondes

    setInterval(() => {
        // Retire la classe active de la slide en cours
        slides[currentIndex].classList.remove('active');
        // Passage à la slide suivante (boucle à la fin)
        currentIndex = (currentIndex + 1) % slides.length;
        // Active la nouvelle slide
        slides[currentIndex].classList.add('active');
    }, slideDuration);
});


//loading

document.addEventListener("DOMContentLoaded", function () {
    // Gestion du loader vidéo
    setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = 0;
        setTimeout(() => {
            loader.style.display = "none";
        }, 1000); // Durée de transition du fondu (1s)
    }, 5000); // La vidéo est affichée pendant 5 secondes

    // Diaporama
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const slideDuration = 5000; // 5000 ms = 5 secondes par slide

    setInterval(() => {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
    }, slideDuration);
});
