// Scroll animation observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".fade-in, .slide-left, .slide-right").forEach(el => {
    observer.observe(el);
});

// Navbar shrink on scroll
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("shrink");
    } else {
        navbar.classList.remove("shrink");
    }
});

// Back to top button
const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// FAQ accordion
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const btn = item.querySelector(".faq-question");
    btn.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});

// Stats counter animation
const statNumbers = document.querySelectorAll(".stat-number");
let statsAnimated = false;

function animateStats() {
    if (statsAnimated) return;
    const statsSection = document.getElementById("timeline");
    const rect = statsSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        statsAnimated = true;
        statNumbers.forEach(num => {
            const target = +num.getAttribute("data-target");
            let current = 0;
            const step = Math.max(1, Math.floor(target / 50));
            const interval = setInterval(() => {
                current += step;
                if (current >= target) {
                    current = target;
                    clearInterval(interval);
                }
                num.textContent = current;
            }, 40);
        });
    }
}

window.addEventListener("scroll", animateStats);
window.addEventListener("load", animateStats);

// Lightbox for gallery
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

galleryItems.forEach(item => {
    item.addEventListener("click", () => {
        const src = item.getAttribute("data-full");
        if (src) {
            lightboxImg.src = src;
            lightbox.style.display = "flex";
        }
    });
});

lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Dark mode toggle
const darkToggle = document.getElementById("darkModeToggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        darkToggle.textContent = "☀️";
    } else {
        darkToggle.textContent = "🌙";
    }
});
