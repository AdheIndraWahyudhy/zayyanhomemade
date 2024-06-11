document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    AOS.init();

    document.getElementById('navbar-toggle').addEventListener('click', function() {
        const mobileMenu = document.getElementById('navbar-mobile-menu');
        mobileMenu.classList.toggle('hidden');
    });

    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            navbar.classList.add('navbar-hidden');
        } else {
            navbar.classList.remove('navbar-hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.image-to-load');
    let imagesLoaded = 0;

    function checkImagesLoaded() {
        imagesLoaded++;
        if (imagesLoaded === images.length) {
            document.getElementById('loadingScreen').classList.add('hidden');
            document.querySelector('.content').classList.remove('hidden');
        }
    }

    images.forEach(image => {
        if (image.complete) {
            checkImagesLoaded();
        } else {
            image.addEventListener('load', checkImagesLoaded);
            image.addEventListener('error', checkImagesLoaded); // in case of error, still call the function
        }
    });
});
var typed = new Typed('#element', {
    strings: ["Haii sobat sehat, salam sehat semua Kami Zayyan Homemade Bersama ini memperkenalkan diri Zayyan Homemade berdiri pada bulan agustus 2019 Didirikan oleh Nurhasni Bersama Abdul Syukur. Kami menyiapkan makanan homemade yang sehat dan kami sajikan untuk konsumen-konsumen kami, Termasuk anda."],
    typeSpeed: 50,
});