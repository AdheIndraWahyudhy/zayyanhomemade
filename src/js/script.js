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
