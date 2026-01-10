const btn = document.getElementById("btn");
const panel = document.getElementById("panel");

btn.addEventListener("click", () => {
    panel.classList.toggle("active");
});

function initCarousel(carrouselId) {
    const carrousel = document.getElementById(carrouselId);
    carrousel.querySelectorAll(".btn").forEach(btn => {
        btn.addEventListener("click", () => {
            carrousel.style.backgroundImage = `url('img/index/${btn.dataset.img}')`;
        });
    });
}

initCarousel("carrousel");
initCarousel("carrousel2");

function setupTopGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    console.log("Galería de catálogo cargada");
}

setupTopGallery();