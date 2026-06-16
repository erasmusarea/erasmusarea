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

// Dark mode toggle
const darkToggle = document.getElementById("darkModeToggle");

darkToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    darkToggle.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// GALLERY WITH NEXT/PREV
const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");

let currentIndex = 0;

// Fotoğrafları liste olarak al
const images = [
    "images/1.foto.jpeg",
    "images/2.foto.jpeg",
    "images/3.foto.jpeg",
    "images/4.foto.jpeg",
    "images/5.foto.jpeg",
    "images/6.foto.jpeg",
    "images/7.foto.jpeg",
    "images/8.foto.jpeg",
    "images/9.foto.jpeg",
    "images/10.foto.jpeg",
    "images/11.foto.jpeg",
    "images/12.foto.jpeg",
    "images/13.foto.jpeg",
    "images/14.foto.jpeg",
    "images/15.foto.jpeg",
    "images/16.foto.jpeg",
    "images/17.foto.jpeg",
    "images/18.foto.jpeg",
    "images/19.foto.jpeg",
    "images/20.foto.jpeg",
    "images/21.foto.jpeg",
    "images/22.foto.jpeg",
    "images/23.foto.jpeg",
    "images/24.foto.jpeg",
    "images/25.foto.jpeg",
    "images/26.foto.jpeg",
    "images/27.foto.jpeg",
    "images/28.foto.jpeg",
    "images/29.foto.jpeg",
    "images/30.foto.jpeg",
    "images/31.foto.jpeg",
    "images/32.foto.jpeg",
    "images/33.foto.jpeg",
    "images/34.foto.jpeg",
    "images/35.foto.jpeg",
    "images/36.foto.jpeg",
    "images/37.foto.jpeg",
    "images/38.foto.jpeg",
    "images/39.foto.jpeg",
    "images/40.foto.jpeg",
    "images/41.foto.jpeg",
    "images/42.foto.jpeg",
    "images/43.foto.jpeg",
    "images/44.foto.jpeg",
    "images/45.foto.jpeg",
    "images/46.foto.jpeg",
    "images/47.foto.jpeg",
    "images/48.foto.jpeg",
    "images/49.foto.jpeg",
    "images/50.foto.jpeg",
    "images/51.foto.jpeg",
    "images/52.foto.jpeg",
    "images/53.foto.jpeg",
    "images/54.foto.jpeg",
    "images/55.foto.jpeg",
    "images/56.foto.jpeg"
];


// Fotoğraf açma
galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        currentIndex = index;
        lightboxImg.src = images[currentIndex];
        lightbox.style.display = "flex";
    });
});

// Sonraki foto
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex];
});

// Önceki foto
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex];
});

// Kapatma
lightboxClose.addEventListener("click", () => {
    lightbox.style.display = "none";
});

// Boş alana tıklayınca kapansın
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
