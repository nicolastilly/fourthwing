document.addEventListener("DOMContentLoaded", function () {
    // Gestion du loader vidéo et affichage du bouton
    const loader = document.getElementById("loader");
    const buttonContainer = document.getElementById('button-container');

    // Après 5 secondes (durée de la vidéo)
    setTimeout(() => {
        // Fondu sortant de la vidéo
        loader.style.opacity = 0;

        setTimeout(() => {
            // Cache la vidéo et affiche le bouton
            loader.style.display = "none";
            buttonContainer.classList.add('visible');
        }, 1000); // Durée de transition du fondu (1s)
    }, 5000); // La vidéo est affichée pendant 5 secondes
});