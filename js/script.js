Vue.use(VueAwesomeSwiper)

const Slider = {
    data() {
        return {
            swiperOptionTop: {
                loop: true,
                loopedSlides: 5,
                spaceBetween: 10,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                }
            },
            swiperOptionThumbs: {
                loop: true,
                loopedSlides: 5,
                spaceBetween: 10,
                centeredSlides: true,
                slidesPerView: 'auto',
                touchRatio: 0.2,
                slideToClickedSlide: true
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            const swiperTop = this.$refs.swiperTop.$swiper
            const swiperThumbs = this.$refs.swiperThumbs.$swiper
            swiperTop.controller.control = swiperThumbs
            swiperThumbs.controller.control = swiperTop
        })
    },
    template: `
<div class="thumb-example">							
    <swiper class="swiper gallery-thumbs" :options="swiperOptionThumbs" ref="swiperThumbs">
        <swiper-slide class="slide-1">
            <div class="slider-top__col slider-top__col_1">
                <svg class="icon">
                    <use xlink:href="img/sprites/sprite.svg#Group 10" ></use>
                </svg>
                <p class="slider-top__text">IoT / M2M</p>
                <p class="slider-top__text">Интернет вещей и межмашинное взаимодействие</p>
            </div>
        </swiper-slide>
        <swiper-slide class="slide-2">
            <div class="slider-top__col slider-top__col_2">
                <svg class="icon">
                    <use xlink:href="img/sprites/sprite.svg#Group 6.1" ></use>
                </svg>
                <p class="slider-top__text">ML/AI</p>
                <p class="slider-top__text">Искуственный интеллект и машинное обучение</p>
            </div>
        </swiper-slide>
        <swiper-slide class="slide-3">
            <div class="slider-top__col slider-top__col_3">
                <svg class="icon">
                    <use xlink:href="img/sprites/sprite.svg#Group 3.2" ></use>
                </svg>
                <p class="slider-top__text">Cloud computing, VDI</p>
                <p class="slider-top__text">Виртуализация вычислительных ресурсов, систем
                    хранения данных и рабочих мест</p>
            </div>
        </swiper-slide>
        <swiper-slide class="slide-4">
            <div class="slider-top__col slider-top__col_4">
                <svg class="icon">
                    <use xlink:href="img/sprites/sprite.svg#Vector" ></use>
                </svg>
                <p class="slider-top__text">Edge computing</p>
                <p class="slider-top__text">Организация вычислений/обработки данных на “границе
                    сети”</p>
            </div>
        </swiper-slide>
    </swiper>							
    <swiper class="swiper gallery-top" :options="swiperOptionTop" ref="swiperTop">
        <swiper-slide class="slide-1">
            <div class="slider-bottom__slider-item">
                <div class="slider-bottom__left">
                    <figure class="slider-bottom__img">
                        <img src="img/section-2/slider-2.webp"
                            alt="Искуственный интеллект и машинное обучение">
                    </figure>
                </div>
                <div class="slider-bottom__right">
                    <div class="slider-bottom__text">
                        <p class="slider-bottom__text_top">IoT / M2M</p>
                        <h3 class="slider-bottom__title-3 title-3">Интернет вещей и межмашинное
                            взаимодействие</h3>
                        <p class="slider-bottom__text_bottom">Применение алгоритмов и
                            фреймворков машинного обучения для обработки данных на edge. Прежде
                            всего, видеоданных (изображений).</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="slide-2">
            <div class="slider-bottom__slider-item">
                <div class="slider-bottom__left">
                    <figure class="slider-bottom__img">
                        <img src="img/section-2/slider-2.webp"
                            alt="Искуственный интеллект и машинное обучение">
                    </figure>
                </div>
                <div class="slider-bottom__right">
                    <div class="slider-bottom__text">
                        <p class="slider-bottom__text_top">ML/AI</p>
                        <h3 class="slider-bottom__title-3 title-3">Искуственный интеллект и
                            машинное обучение</h3>
                        <p class="slider-bottom__text_bottom">Применение алгоритмов и
                            фреймворков машинного обучения для обработки данных на edge. Прежде
                            всего, видеоданных (изображений).</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="slide-3">
            <div class="slider-bottom__slider-item">
                <div class="slider-bottom__left">
                    <figure class="slider-bottom__img">
                        <img src="img/section-2/slider-2.webp"
                            alt="Искуственный интеллект и машинное обучение">
                    </figure>
                </div>
                <div class="slider-bottom__right">
                    <div class="slider-bottom__text">
                        <p class="slider-bottom__text_top">Cloud computing, VDI</p>
                        <h3 class="slider-bottom__title-3 title-3">Виртуализация вычислительных
                            ресурсов, систем хранения данных и рабочих мест</h3>
                        <p class="slider-bottom__text_bottom">Применение алгоритмов и
                            фреймворков машинного обучения для обработки данных на edge. Прежде
                            всего, видеоданных (изображений).</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide class="slide-4">
            <div class="slider-bottom__slider-item">
                <div class="slider-bottom__left">
                    <figure class="slider-bottom__img">
                        <img src="img/section-2/slider-2.webp"
                            alt="Искуственный интеллект и машинное обучение">
                    </figure>
                </div>
                <div class="slider-bottom__right">
                    <div class="slider-bottom__text">
                        <p class="slider-bottom__text_top">Edge computing</p>
                        <h3 class="slider-bottom__title-3 title-3">Организация
                            вычислений/обработки данных на “границе сети”</h3>
                        <p class="slider-bottom__text_bottom">Применение алгоритмов и
                            фреймворков машинного обучения для обработки данных на edge. Прежде
                            всего, видеоданных (изображений).</p>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <div class="swiper-button-next swiper-button-red" slot="button-next"></div>
        <div class="swiper-button-prev swiper-button-red" slot="button-prev"></div>
    </swiper>
</div>
    `
};

new Vue({
    el: '#vueapp',
    components: {
        'slider': Slider
    }
})