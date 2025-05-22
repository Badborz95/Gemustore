document.addEventListener('DOMContentLoaded', function() {
    const sliderContainers = document.querySelectorAll('.slider-container');

    sliderContainers.forEach(function(container) {
        const image = container.querySelector('img');
        const video = container.querySelector('video');

        console.log("Container:", container);
        console.log("Image:", image);
        console.log("Video:", video);

        if (image && video) {
            container.addEventListener('mouseover', function() {
                console.log("Survol détecté sur:", container);
                video.muted = true; // Mute la video
                video.play().catch(error => {
                    console.error("Erreur lors de la lecture de la vidéo:", error);
                });
            });

            container.addEventListener('mouseout', function() {
                console.log("Fin de survol détectée sur:", container);
                video.pause();
                video.currentTime = 0;
            });
        }
    });
});

window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});