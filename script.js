// Inisialisasi AOS
AOS.init({
    duration: 1000,
    once: true
});

// Dark Mode Toggle
const themeSwitch = document.querySelector('.theme-switch');
const body = document.body;

themeSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const icon = themeSwitch.querySelector('i');
    if (body.classList.contains('dark-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth Scroll untuk navigasi
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi typing untuk nama
const typingText = document.querySelector('.typing-text');
const text = typingText.textContent;
typingText.textContent = '';
let i = 0;

function type() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
    }
}

type();

// Skill Progress Animation
const skills = document.querySelectorAll('.skill-progress');
const animateProgress = (skill) => {
    const progress = skill.querySelector('.progress');
    const percentage = progress.getAttribute('data-progress');
    progress.style.width = percentage;
};

// Observer untuk animasi skill
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgress(entry.target);
        }
    });
}, { threshold: 0.5 });

skills.forEach(skill => observer.observe(skill));

// Animasi sederhana untuk skill items
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'translateY(-5px)';
        item.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'translateY(0)';
        item.style.boxShadow = 'none';
    });
});

// Animasi smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animasi fade-in saat halaman dimuat
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.card').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.card').style.transition = 'opacity 1s ease';
        document.querySelector('.card').style.opacity = '1';
    }, 100);
}); 