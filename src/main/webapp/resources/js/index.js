let firstSlide = 1;
let autoSlideInterval = setInterval(nextSlide, 5000);
const slides = document.querySelectorAll(".slider-container li");
const lastSlide = slides.length;

function showSlide(slideIndex) {
    slides.forEach(slide => slide.style.display = 'none');
    slides.forEach(slide => slide.style.animation = 'none');
    document.querySelector('.slide' + slideIndex).style.display = 'block';
    document.querySelector('.slide' + slideIndex).style.animation = 'slideAnimation 1s';
}

function nextSlide() {
    firstSlide = firstSlide === lastSlide ? 1 : firstSlide + 1;
    showSlide(firstSlide);
    resetAutoSlide();
}

function prevSlide() {
    firstSlide = firstSlide === 1 ? lastSlide : firstSlide - 1;
    showSlide(firstSlide);
    resetAutoSlide();
}

document.querySelector(".next").addEventListener('click', nextSlide);
document.querySelector(".prev").addEventListener('click', prevSlide);

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(nextSlide, 5000);
}

showSlide(firstSlide);

let loginForm_on = 1;

function loginForm_btn() {
    if (loginForm_on === 0) {
        loginForm_on++;
        document.querySelector('.login_form').style.animation = 'loginFormAnimation_off 1.5s forwards';
    } else if (loginForm_on === 1) {
        loginForm_on--;
        document.querySelector('.login_form').style.animation = 'loginFormAnimation_on 1.5s forwards';
    }
}

const checkbox = document.querySelector('.locker');
const formElements = document.querySelectorAll('.form_lock');

function updateFormLock() {
    formElements.forEach(input => {
        input.disabled = !checkbox.checked;
    });
}

checkbox.addEventListener('change', updateFormLock);

updateFormLock();