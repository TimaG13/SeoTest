window.onload = function () {
    // scloll top
    (function () {
        'use strict';

        function trackScroll() {
            var scrolled = window.pageYOffset;
            var coords = document.documentElement.clientHeight;

            if (scrolled > coords) {
                goTopBtn.classList.add('back_to_top-show');
            }
            if (scrolled < coords) {
                goTopBtn.classList.remove('back_to_top-show');
            }
        }

        function backToTop() {
            if (window.pageYOffset > 0) {
                window.scrollBy(0, -80);
                setTimeout(backToTop, 0);
            }
        }

        var goTopBtn = document.querySelector('.back_to_top');

        window.addEventListener('scroll', trackScroll);
        goTopBtn.addEventListener('click', backToTop);
    })();

    // slider
    if (document.querySelector("main").classList.contains("p-home")) {
        class airSlider {
            constructor(e) {
                //Element Description
                this.slider = document.querySelector('.air-slider');
                this.slider.children[0].classList.toggle('active-slide');
                //Slider Length
                this.length = document.querySelectorAll('.slide').length;
                //Constrols
                var controls = document.createElement('div');
                controls.className = 'controls';
                controls.innerHTML = '<button id="prev"></button><button id="next"></button>';
                this.slider.appendChild(controls);
                //Controls Listeners
                document.querySelector('#prev').addEventListener('click', function () {
                    slider.prev();
                });
                document.querySelector('#next').addEventListener('click', function () {
                    slider.next();
                });
                //AutoPlay
                if (e.autoPlay == true) {
                    this.autoPlayTime = e.autoPlayTime;
                    if (this.autoPlayTime == undefined) {
                        this.autoPlayTime = 3000;
                    }
                    setInterval(this.autoPlay, this.autoPlayTime);
                }
            }

            prev() {
                var currentSlide = document.querySelector('.active-slide');
                var prevSlide = document.querySelector('.active-slide').previousElementSibling;
                if (prevSlide == undefined) {
                    prevSlide = this.slider.children[this.length - 1];
                }
                currentSlide.className = 'slide';
                prevSlide.classList = 'slide active-slide'
            }

            next() {
                var currentSlide = document.querySelector('.active-slide');
                var nextSlide = document.querySelector('.active-slide').nextElementSibling;
                if (nextSlide.className == 'controls') {
                    nextSlide = this.slider.children[0];
                }
                currentSlide.className = 'slide';
                nextSlide.classList = 'slide active-slide fadeIn'
            }

            autoPlay() {
                slider.next();
            }
        }

        var slider = new airSlider({
            autoPlay: true
        });
    }
    // menu
    document.querySelector('.btn-menu').onclick = function () {
        document.querySelector('header .wrapper').classList.toggle('active');
    }
};
