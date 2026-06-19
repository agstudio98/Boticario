document.addEventListener("DOMContentLoaded", () => {
    // Nav Menu Setup
    const btn = document.getElementById("btn");
    const panel = document.getElementById("panel");

    if (btn && panel) {
        // Create three spans inside the button for hamburger animations
        btn.innerHTML = `
            <span class="line"></span>
            <span class="line"></span>
            <span class="line"></span>
        `;

        btn.addEventListener("click", () => {
            panel.classList.toggle("active");
            btn.classList.toggle("open");

            if (panel.classList.contains("active")) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "";
            }
        });

        // Close panel when a link is clicked
        panel.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                panel.classList.remove("active");
                btn.classList.remove("open");
                document.body.style.overflow = "";
            });
        });

        // Close panel when clicking on the backdrop overlay (clicking e.target === panel)
        panel.addEventListener("click", (e) => {
            if (e.target === panel) {
                panel.classList.remove("active");
                btn.classList.remove("open");
                document.body.style.overflow = "";
            }
        });

        // Highlight current active page link
        const currentPath = window.location.pathname.split("/").pop();
        panel.querySelectorAll("ul li a").forEach(link => {
            const linkPath = link.getAttribute("href");
            if (linkPath === currentPath || (currentPath === "" && linkPath === "main.html")) {
                link.classList.add("active-link");
            }
        });
    }

    // Carousel Logic
    window.initCarousel = function(carrouselId) {
        const carrousel = document.getElementById(carrouselId);
        if (!carrousel) return;

        const btns = carrousel.querySelectorAll(".btn");
        if (btns.length === 0) return;

        // Set first dot active initially
        btns[0].classList.add("active");

        btns.forEach(btn => {
            btn.addEventListener("click", () => {
                // Update active state of buttons
                btns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");

                // Update background image
                const imgPath = btn.dataset.img;
                if (imgPath) {
                    if (imgPath.startsWith('img/') || imgPath.startsWith('./img/')) {
                        carrousel.style.backgroundImage = `url('${imgPath}')`;
                    } else {
                        carrousel.style.backgroundImage = `url('img/index/${imgPath}')`;
                    }
                }
            });
        });
    };

    // Auto initialize if on main page
    initCarousel("carrousel");
    initCarousel("carrousel2");
});