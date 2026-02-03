/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerMenu": () => (/* binding */ burgerMenu),
/* harmony export */   "isWebp": () => (/* binding */ isWebp),
/* harmony export */   "phoneMask": () => (/* binding */ phoneMask),
/* harmony export */   "popups": () => (/* binding */ popups)
/* harmony export */ });
/*---------------------------------------------------------------------------
Проверка WebP
---------------------------------------------------------------------------*/
function isWebp() {
   function testWebP(callback) {
      const webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height === 2);
      };
      webP.src =
         "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   testWebP(function (support) {
      document.body.classList.add(support ? "webp" : "no-webp");
   });
}


/*---------------------------------------------------------------------------
Маска телефона
---------------------------------------------------------------------------*/
function phoneMask() {
   document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("input.tel-mask").forEach((input) => {
         let keyCode;
         function mask(event) {
            event.keyCode && (keyCode = event.keyCode);
            let pos = this.selectionStart;
            if (pos < 3) event.preventDefault();
            let matrix = "+7 (___) ___ __ __",
               i = 0,
               val = this.value.replace(/\D/g, ""),
               new_value = matrix.replace(/[_\d]/g, (a) =>
                  i < val.length ? val.charAt(i++) : a
               );
            i = new_value.indexOf("_");
            if (i !== -1) {
               i < 5 && (i = 3);
               new_value = new_value.slice(0, i);
            }
            let reg = matrix
               .substr(0, this.value.length)
               .replace(/_+/g, (a) => `\\d{1,${a.length}}`)
               .replace(/[+()]/g, "\\$&");
            reg = new RegExp("^" + reg + "$");
            if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) {
               this.value = new_value;
            }
            if (event.type === "blur" && this.value.length < 5) this.value = "";
         }

         input.addEventListener("input", mask);
         input.addEventListener("focus", mask);
         input.addEventListener("blur", mask);
         input.addEventListener("keydown", mask);
      });
   });
}


/*---------------------------------------------------------------------------
Бургер меню
---------------------------------------------------------------------------*/
function burgerMenu() {
   document.addEventListener("DOMContentLoaded", () => {
      const menuIcon = document.querySelector(".menu__icon");
      const menuBody = document.querySelector(".menu__body");
      const body = document.body;
      const menuBodyClose = document.querySelector(".menu__body-close");

      if (!menuIcon || !menuBody) return;

      const closeMenu = () => {
         menuIcon.classList.remove("active");
         menuBody.classList.remove("active");
         body.classList.remove("no-scroll");
      };

      menuIcon.addEventListener("click", () => {
         menuIcon.classList.toggle("active");
         menuBody.classList.toggle("active");
         body.classList.toggle("no-scroll");
      });

      menuBody.addEventListener("click", (e) => {
         if (e.target.tagName === "A" || e.target.closest("a")) closeMenu();
      });

      if (menuBodyClose) menuBodyClose.addEventListener("click", closeMenu);

      document.addEventListener("click", (e) => {
         if (!menuBody.contains(e.target) && !menuIcon.contains(e.target)) closeMenu();
      });
   });
}


/*---------------------------------------------------------------------------
Попапы
---------------------------------------------------------------------------*/
function popups() {
   document.addEventListener("DOMContentLoaded", () => {
      const openButtons = document.querySelectorAll(".open-popup");

      function closeActivePopup() {
         const activePopup = document.querySelector(".popup.show");
         if (activePopup) {
            activePopup.classList.remove("show");
         }
      }

      openButtons.forEach((button) => {
         button.addEventListener("click", function (e) {
            e.preventDefault();

            const popupId = this.dataset.popup;
            const popup = document.getElementById(popupId);
            if (!popup) return;

            // закрываем текущий попап
            closeActivePopup();

            // открываем новый
            popup.classList.add("show");
            document.body.style.overflow = "hidden";
         });
      });

      document.addEventListener("click", (e) => {
         const openPopup = document.querySelector(".popup.show");
         if (!openPopup) return;

         const isCloseBtn = e.target.closest(".popup__close");
         const isInsideBody = e.target.closest(".popup__body");
         const isPopupArea = e.target.closest(".popup");

         if (isCloseBtn || (!isInsideBody && isPopupArea)) {
            openPopup.classList.remove("show");
            document.body.style.overflow = "";
         }
      });
   });
}


/*==========================================================================
Swiper init
============================================================================*/
/* const reviewsSlider = document.querySelector(".reviews__slider");

if (reviewsSlider) {
   const reviewsSwiper = new Swiper(reviewsSlider, {
      slidesPerView: 1,
      loop: true,
      freeMode: false,
   });
} */

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.burgerMenu();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.popups();
_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.phoneMask();

/*==========================================================================
Submenu
============================================================================*/
function initSubmenu() {
   const items = document.querySelectorAll('.menu__item--has-submenu');
   if (!items.length) return;

   items.forEach(item => {
      item.addEventListener('click', (e) => {
         if (e.target.closest('.submenu a')) return;

         e.preventDefault();

         items.forEach(i => {
            if (i !== item) i.classList.remove('open');
         });

         item.classList.toggle('open');
      });
   });

   document.addEventListener('click', (e) => {
      if (!e.target.closest('.menu__item--has-submenu')) {
         items.forEach(item => item.classList.remove('open'));
      }
   });
}



/*==========================================================================
Preloader
============================================================================*/
function initPreloader() {
   const preloader = document.querySelector('.preloader');
   if (!preloader) return;

   const MIN_TIME = 1000;
   const startTime = Date.now();

   window.addEventListener('load', () => {
      const timePassed = Date.now() - startTime;
      const delay = Math.max(0, MIN_TIME - timePassed);

      setTimeout(() => {
         preloader.classList.add('hidden');

         setTimeout(() => {
            preloader.remove();
         }, 1200);
      }, delay);
   });
}


/*==========================================================================
Header fix
============================================================================*/
function initHeaderFix() {
   const header = document.querySelector('header');
   if (!header) return;

   const toggleHeaderClass = () => {
      header.classList.toggle('fx', window.scrollY > 0);
   };

   toggleHeaderClass();
   window.addEventListener('scroll', toggleHeaderClass);
}


/*==========================================================================
Observer Animation
============================================================================*/
function initObserverAnimation() {
   const elements = document.querySelectorAll('.element-animation');
   if (!elements.length) return;

   const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            entry.target.classList.add('element-show');
         }
      });
   }, {
      threshold: 0
   });

   elements.forEach(el => observer.observe(el));
}



/*==========================================================================
Move buttons
============================================================================*/
function initMoveButtons() {
   const headerButtons = document.querySelector('.header__callback');
   const menuBody = document.querySelector('.menu__body');
   const headerBody = document.querySelector('.header__buttons');

   if (!headerButtons || !menuBody || !headerBody) return;

   const originalParent = headerBody;
   const originalNextSibling = headerButtons.nextElementSibling;

   const mq = window.matchMedia('(max-width: 1200px)');

   const handleMove = (e) => {
      if (e.matches) {
         if (headerButtons.parentElement !== menuBody) {
            menuBody.appendChild(headerButtons);
         }
      } else {
         if (headerButtons.parentElement !== originalParent) {
            if (originalNextSibling) {
               originalParent.insertBefore(headerButtons, originalNextSibling);
            } else {
               originalParent.appendChild(headerButtons);
            }
         }
      }
   };

   handleMove(mq);
   mq.addEventListener('change', handleMove);
}



/*==========================================================================
Related slider
============================================================================*/
function initRelatedSlider() {
   const cardsSlider = document.querySelector('.latest__slider');
   if (!cardsSlider || typeof Swiper === 'undefined') return;

   new Swiper(cardsSlider, {
      loop: true,
      spaceBetween: 32,
      navigation: {
         nextEl: '.latest__next',
         prevEl: '.latest__prev',
      },
      breakpoints: {
         320: { slidesPerView: 1 },
         650: { slidesPerView: 2 },
         1100: { slidesPerView: 3 },
         1600: { slidesPerView: 4 },
      }
   });
}


/*==========================================================================
Filter tabs
============================================================================*/
function initFilterTabs() {
   const tabs = document.querySelectorAll('.filters__tab');
   const cards = document.querySelectorAll('.filters__card');

   if (!tabs.length || !cards.length) return;

   tabs.forEach(tab => {
      tab.addEventListener('click', () => {
         const tabId = tab.dataset.tab;
         if (!tabId) return;

         tabs.forEach(t => t.classList.remove('active'));
         tab.classList.add('active');

         cards.forEach(card => card.classList.remove('show'));

         const targetCard = document.querySelector(`.filters__card[data-tab="${tabId}"]`);
         if (targetCard) {
            targetCard.classList.add('show');
         }
      });
   });
}


/*==========================================================================
Swiper in product card  
============================================================================*/
function initProductCardSwipers() {
   const sliders = document.querySelectorAll('.card-preview__slider');
   if (!sliders.length || typeof Swiper === 'undefined') return;

   sliders.forEach(slider => {
      const container = slider.closest('.card-preview__image');
      const paginationEl = container?.querySelector('.card-preview__pagination');

      const swiperInstance = new Swiper(slider, {
         loop: true,
         nested: true,
         pagination: paginationEl ? {
            el: paginationEl,
            clickable: true,
            type: 'bullets',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: (index, className) =>
               `<span class="${className}"></span>`,
         } : undefined,
      });

      if (window.innerWidth <= 1024) return;

      let lastMouseX = null;
      const threshold = 20;

      const onMouseMove = (e) => {
         if (lastMouseX === null) {
            lastMouseX = e.clientX;
            return;
         }

         const deltaX = e.clientX - lastMouseX;
         if (Math.abs(deltaX) > threshold) {
            deltaX > 0 ? swiperInstance.slideNext() : swiperInstance.slidePrev();
            lastMouseX = e.clientX;
         }
      };

      const onMouseLeave = () => {
         lastMouseX = null;
      };

      slider.addEventListener('mousemove', onMouseMove);
      slider.addEventListener('mouseleave', onMouseLeave);
   });
}



/*==========================================================================
Reviews slider
============================================================================*/
function initReviewsSlider() {
   const reviewsSlider = document.querySelector('.reviews__slider');
   if (!reviewsSlider || typeof Swiper === 'undefined') return;

   new Swiper(reviewsSlider, {
      slidesPerView: 1,
      loop: true,
      spaceBetween: 0,
      navigation: {
         nextEl: '.reviews__next',
         prevEl: '.reviews__prev',
      },
   });
}


/*==========================================================================
Best slider
============================================================================*/
function initBestSlider() {
   const bestSlider = document.querySelector('.best__slider');
   if (!bestSlider || typeof Swiper === 'undefined') return;

   function carouselEffect({ swiper, on, extendParams }) {
      extendParams({
         carouselEffect: {
            opacityStep: 0.33,
            scaleStep: 0.2,
            sideSlides: 2
         }
      });

      on('beforeInit', () => {
         if (swiper.params.effect !== 'carousel') return;

         swiper.classNames.push(
            `${swiper.params.containerModifierClass}carousel`
         );

         Object.assign(swiper.params, {
            watchSlidesProgress: true,
            centeredSlides: true
         });

         Object.assign(swiper.originalParams, {
            watchSlidesProgress: true,
            centeredSlides: true
         });
      });

      on('progress', () => {
         if (swiper.params.effect !== 'carousel') return;

         const { scaleStep, opacityStep, sideSlides } = swiper.params.carouselEffect;

         const maxSide = Math.max(Math.min(sideSlides, 3), 1);
         const l = { 1: 2, 2: 1, 3: 0.2 }[maxSide];
         const o = { 1: 50, 2: 50, 3: 67 }[maxSide];
         const slidesCount = swiper.slides.length;

         for (let i = 0; i < slidesCount; i++) {
            const slide = swiper.slides[i];
            const progress = slide.progress;
            const absProgress = Math.abs(progress);

            let modifier = 1;
            if (absProgress > 1) {
               modifier = (absProgress - 1) * 0.3 * l + 1;
            }

            const translate = `${progress * modifier * o * (swiper.rtlTranslate ? -1 : 1)}%`;
            const scale = 1 - absProgress * scaleStep;
            const zIndex = slidesCount - Math.abs(Math.round(progress));

            slide.style.transform = `translateX(${translate}) scale(${scale})`;
            slide.style.zIndex = zIndex;
            slide.style.opacity = absProgress > maxSide + 1 ? 0 : 1;

            slide
               .querySelectorAll('.swiper-carousel-animate-opacity')
               .forEach(el => {
                  el.style.opacity = 1 - absProgress * opacityStep;
               });
         }
      });

      on('resize', () => {
         if (swiper.virtual && swiper.params.virtual?.enabled) {
            requestAnimationFrame(() => {
               if (!swiper.destroyed) {
                  swiper.updateSlides();
                  swiper.updateProgress();
               }
            });
         }
      });

      on('setTransition', (_, duration) => {
         if (swiper.params.effect !== 'carousel') return;

         swiper.slides.forEach(slide => {
            slide.style.transitionDuration = `${duration}ms`;
            slide
               .querySelectorAll('.swiper-carousel-animate-opacity')
               .forEach(el => {
                  el.style.transitionDuration = `${duration}ms`;
               });
         });
      });
   }

   new Swiper(bestSlider, {
      effect: 'carousel',
      grabCursor: true,
      loop: true,
      loopAdditionalSlides: 1,
      slidesPerView: 'auto',
      autoplay: {
         delay: 3000
      },
      modules: [carouselEffect]
   });
}

/*==========================================================================
Sort
============================================================================*/
function initCatalogSort() {
   const sorts = document.querySelectorAll('.catalog__sort');
   if (!sorts.length) return;

   sorts.forEach(sort => {
      const btn = sort.querySelector('.catalog__sort-btn');
      const params = sort.querySelector('.catalog__sort-params');

      if (!btn || !params) return;

      btn.addEventListener('click', (e) => {
         e.stopPropagation();

         // закрываем остальные
         sorts.forEach(other => {
            if (other !== sort) {
               other.querySelector('.catalog__sort-btn')?.classList.remove('active');
               other.querySelector('.catalog__sort-params')?.classList.remove('show');
            }
         });

         btn.classList.toggle('active');
         params.classList.toggle('show');
      });

      params.addEventListener('click', (e) => {
         if (e.target.closest('a')) {
            btn.classList.remove('active');
            params.classList.remove('show');
         }
      });
   });

   // клик вне сортировки
   document.addEventListener('click', (e) => {
      sorts.forEach(sort => {
         if (!sort.contains(e.target)) {
            sort.querySelector('.catalog__sort-btn')?.classList.remove('active');
            sort.querySelector('.catalog__sort-params')?.classList.remove('show');
         }
      });
   });
}

/*==========================================================================
Scroll top
============================================================================*/
function initScrollTop() {
   const goToTopBtn = document.querySelector('.go-to-top');
   if (!goToTopBtn) return;

   const toggleVisibility = () => {
      goToTopBtn.classList.toggle(
         'show',
         window.scrollY > window.innerHeight
      );
   };

   window.addEventListener('scroll', toggleVisibility);

   goToTopBtn.addEventListener('click', () => {
      window.scrollTo({
         top: 0,
         behavior: 'smooth',
      });
   });

   toggleVisibility();
}


/*==========================================================================
Aside
============================================================================*/
function initCatalogAside() {
   const toggle = document.querySelector('.catalog__filter-toggle');
   const aside = document.querySelector('.catalog__aside');
   const closeBtn = document.querySelector('.aside__close');
   const body = document.body;

   if (!toggle || !aside) return;

   const openFilter = () => {
      toggle.classList.add('active');
      aside.classList.add('show');
      body.classList.add('filter-opened');
   };

   const closeFilter = () => {
      toggle.classList.remove('active');
      aside.classList.remove('show');
      body.classList.remove('filter-opened');
   };

   toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      aside.classList.contains('show') ? closeFilter() : openFilter();
   });

   closeBtn?.addEventListener('click', closeFilter);

   document.addEventListener('click', (e) => {
      if (!aside.contains(e.target) && !toggle.contains(e.target)) {
         closeFilter();
      }
   });
}


/*==========================================================================
Bussones center slider
============================================================================*/
function initBusinessCenterSlider() {
   const bcSlider = document.querySelector('.business-center__slider');
   if (!bcSlider || typeof Swiper === 'undefined') return;

   new Swiper(bcSlider, {
      loop: true,
      effect: 'fade',
      slidesPerView: 1,
      spaceBetween: 0,
      direction: 'horizontal',
      speed: 1000,
      autoplay: {
         delay: 3000,
         disableOnInteraction: false
      },
      pagination: {
         el: '.business-center__pagination',
         clickable: true,
      },
   });
}


/*------------------------------Галерея---------------------------*/
function initGallery() {
   const openBtn = document.getElementById('openGallery');
   if (!openBtn) return;

   openBtn.addEventListener('click', () => {
      const slides = document.querySelectorAll('.business-center__slide');
      if (!slides.length) return;
      if (typeof Fancybox === 'undefined' || !Fancybox.show) return;

      const items = Array.from(slides)
         .map(slide => {
            const img = slide.querySelector('img');
            if (!img?.src) return null;

            return {
               src: img.src,
               type: 'image',
               caption: img.alt || ''
            };
         })
         .filter(Boolean);

      if (!items.length) return;

      Fancybox.show(items);
   });
}



/*==========================================================================
Hidden text
============================================================================*/
function initHiddenText() {
   const hiddenText = document.querySelector('.hidden-text');
   if (!hiddenText) return;

   const wrapper = hiddenText.querySelector('.hidden-text__wrapper');
   const toggleBtn = hiddenText.querySelector('.hidden-text__toggle button');
   if (!wrapper || !toggleBtn) return;

   const collapsedHeight = 160;
   wrapper.style.maxHeight = `${collapsedHeight}px`;

   toggleBtn.addEventListener('click', () => {
      const isOpen = wrapper.classList.contains('open');

      if (isOpen) {
         wrapper.style.maxHeight = `${collapsedHeight}px`;
         wrapper.classList.remove('open');
         toggleBtn.textContent = 'Показать больше';
      } else {
         wrapper.style.maxHeight = `${wrapper.scrollHeight}px`;
         wrapper.classList.add('open');
         toggleBtn.textContent = 'Скрыть';
      }
   });
}



/*==========================================================================
Swiper in office card
============================================================================*/
function initOfficeCardSwipers() {
   const sliders = document.querySelectorAll('.offices__item-slider');
   if (!sliders.length || typeof Swiper === 'undefined') return;

   sliders.forEach(slider => {
      const container = slider.closest('.offices__item-preview');
      const paginationEl = container?.querySelector('.offices__item-pagination');

      const swiperInstance = new Swiper(slider, {
         loop: true,
         nested: true,
         pagination: paginationEl ? {
            el: paginationEl,
            clickable: true,
            type: 'bullets',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
            renderBullet: (index, className) =>
               `<span class="${className}"></span>`
         } : undefined,
      });

      // управление мышью — только desktop
      if (window.innerWidth <= 1024) return;

      let lastMouseX = null;
      const threshold = 20;

      const onMouseMove = (e) => {
         if (lastMouseX === null) {
            lastMouseX = e.clientX;
            return;
         }

         const deltaX = e.clientX - lastMouseX;
         if (Math.abs(deltaX) > threshold) {
            deltaX > 0 ? swiperInstance.slideNext() : swiperInstance.slidePrev();
            lastMouseX = e.clientX;
         }
      };

      slider.addEventListener('mousemove', onMouseMove);
      slider.addEventListener('mouseleave', () => {
         lastMouseX = null;
      });
   });
}


/*==========================================================================
Office tabs
============================================================================*/
function initOfficeTabs() {
   const tabs = document.querySelectorAll('.offices__tab');
   const items = document.querySelectorAll('.offices__items');
   const loader = document.querySelector('.loading-icon');

   if (!tabs.length || !items.length || !loader) return;

   let timeoutId = null;

   tabs.forEach(tab => {
      tab.addEventListener('click', () => {
         if (tab.classList.contains('active')) return;

         const target = tab.dataset.tab;
         if (!target) return;

         // отменяем предыдущий таймер
         if (timeoutId) {
            clearTimeout(timeoutId);
            timeoutId = null;
         }

         // активный таб
         tabs.forEach(t => t.classList.remove('active'));
         tab.classList.add('active');

         // показать лоадер
         loader.classList.add('active');

         // скрыть контент
         items.forEach(item => item.classList.remove('active'));

         // сбросить анимации
         document
            .querySelectorAll('.element-animation')
            .forEach(el => el.classList.remove('element-show'));

         timeoutId = setTimeout(() => {
            loader.classList.remove('active');

            const targetItem = document.querySelector(
               `.offices__items[data-tab="${target}"]`
            );
            if (!targetItem) return;

            targetItem.classList.add('active');

            // даём браузеру отрендерить DOM → затем анимация
            requestAnimationFrame(() => {
               requestAnimationFrame(() => {
                  targetItem
                     .querySelectorAll('.element-animation')
                     .forEach(el => el.classList.add('element-show'));
               });
            });

            timeoutId = null;
         }, 300);
      });
   });
}



/*==========================================================================
Офис слайдеры   
============================================================================*/
function initOfficeGallerySliders() {
   const thumbsSlider = document.querySelector('.office__gallery-slider');
   const mainSlider = document.querySelector('.office__gallery-slider-2');

   if (!thumbsSlider || !mainSlider || typeof Swiper === 'undefined') return;

   const thumbsSwiper = new Swiper(thumbsSlider, {
      direction: 'vertical',
      spaceBetween: 10,
      slidesPerView: 6,
      watchSlidesProgress: true,
      freeMode: {
         enabled: true,
         momentum: true,
         momentumRatio: 1,
         momentumBounce: false,
      },
   });

   new Swiper(mainSlider, {
      direction: 'vertical',
      spaceBetween: 10,
      thumbs: {
         swiper: thumbsSwiper,
      },
      mousewheel: {
         releaseOnEdges: false,
         sensitivity: 2,
      },
      pagination: {
         el: '.office__gallery-pagination',
         clickable: true,
      },
      breakpoints: {
         320: {
            direction: 'horizontal',
            slidesPerView: 'auto',
            spaceBetween: 10,
         },
         1000: {
            direction: 'vertical',
            slidesPerView: 1,
            spaceBetween: 10,
         },
      },
   });
}

/*==========================================================================
Офис галерея
============================================================================*/
function initOfficeGalleryLightbox() {
   const openBtn = document.querySelector('.office__gallery-open');
   if (!openBtn) return;
   if (typeof Fancybox === 'undefined' || !Fancybox.show) return;

   openBtn.addEventListener('click', () => {
      const slides = document.querySelectorAll(
         '.office__gallery-slider-2 .office__gallery-item'
      );
      if (!slides.length) return;

      const items = Array.from(slides)
         .map(slide => {
            const img = slide.querySelector('img');
            if (!img?.src) return null;

            return {
               src: img.src,
               type: 'image',
               caption: ''
            };
         })
         .filter(Boolean);

      if (!items.length) return;

      Fancybox.show(items, {
         Thumbs: false,
         Toolbar: true,
      });
   });
}


/*==========================================================================
NEW BC PAGE SLIDER
============================================================================*/
function initNewBcPageSlider() {
   if (typeof Swiper === 'undefined') return;

   const bcContainer = document.querySelector('.bc-hero__slider');
   if (!bcContainer) return;

   const bcWrapper = bcContainer.querySelector('.bc-hero__slider-wrapper');
   const bcSlides = bcWrapper?.querySelectorAll('.bc-hero__slide');
   const paginationElement = document.querySelector('.bc-hero__fraction');

   if (!bcWrapper || !bcSlides?.length) return;

   let bcSwiper = null;

   const updateActiveSlideLink = (swiper) => {
      document
         .querySelectorAll('.js-slide-link')
         .forEach(link => link.classList.remove('active'));

      const activeLink = document.querySelector(
         `.js-slide-link[data-slide="${swiper.activeIndex}"]`
      );

      activeLink?.classList.add('active');
   };

   const updateBcSwiper = () => {
      if (window.innerWidth >= 1200) {
         if (!bcSwiper) {
            bcContainer.classList.add('swiper');
            bcWrapper.classList.add('swiper-wrapper');
            bcSlides.forEach(slide => slide.classList.add('swiper-slide'));

            bcSwiper = new Swiper(bcContainer, {
               loop: false,
               direction: 'vertical',
               slidesPerView: 1,
               watchOverflow: true,
               simulateTouch: true,
               nested: true,
               grabCursor: false,
               slideToClickedSlide: false,
               speed: 1500,
               allowTouchMove: true,
               mousewheel: {
                  forceToAxis: true,
                  releaseOnEdges: true,
                  sensitivity: 1,
               },
               keyboard: {
                  enabled: true,
                  onlyInViewport: true,
               },
               pagination: {
                  el: '.bc-hero__fraction',
                  type: 'custom',
                  clickable: true,
                  renderCustom(swiper, current, total) {
                     let html = '';
                     for (let i = 1; i <= total; i++) {
                        html += `
                  <span
                    class="swiper-pagination-item ${i === current ? 'active' : ''}"
                    data-index="${i}"
                  >
                    ${String(i).padStart(2, '0')}.
                  </span>
                `;
                     }
                     return html;
                  },
               },
               on: {
                  init: updateActiveSlideLink,
                  slideChange: updateActiveSlideLink,
               },
            });

            paginationElement?.addEventListener('click', (e) => {
               const item = e.target.closest('.swiper-pagination-item');
               if (!item) return;

               const index = Number(item.dataset.index);
               if (!Number.isNaN(index)) {
                  bcSwiper.slideTo(index - 1);
               }
            });
         }
      } else {
         if (bcSwiper) {
            bcSwiper.destroy(true, true);
            bcSwiper = null;
         }

         bcContainer.classList.remove('swiper');
         bcWrapper.classList.remove('swiper-wrapper');
         bcSlides.forEach(slide => {
            slide.classList.remove(
               'swiper-slide',
               'swiper-slide-active',
               'swiper-slide-next',
               'swiper-slide-prev'
            );
         });

         if (paginationElement) paginationElement.innerHTML = '';
      }
   };

   window.addEventListener('load', updateBcSwiper);
   window.addEventListener('resize', updateBcSwiper);

   document.querySelectorAll('.js-slide-link').forEach(link => {
      link.addEventListener('click', (e) => {
         if (!bcSwiper || window.innerWidth < 1200) return;

         e.preventDefault();
         const index = Number(link.dataset.slide);
         if (!Number.isNaN(index)) {
            bcSwiper.slideTo(index, 1500);
         }
      });
   });
}


/*==========================================================================
Office tabs in bc page
============================================================================*/
function initBcPageOfficeTabs() {
   const officesPopup = document.querySelector('.offices-popup');
   if (!officesPopup) return;

   const tabs = officesPopup.querySelectorAll('.offices-popup__tab');
   const items = officesPopup.querySelectorAll('.offices-popup__items');
   const loader = officesPopup.querySelector('.loading-icon');

   if (!tabs.length || !items.length || !loader) return;

   tabs.forEach(tab => {
      tab.addEventListener('click', () => {
         if (tab.classList.contains('active')) return;

         const target = tab.dataset.offices;
         if (!target) return;

         // активный таб
         tabs.forEach(t => t.classList.remove('active'));
         tab.classList.add('active');

         // показать лоадер
         loader.classList.add('active');

         // скрыть все блоки
         items.forEach(item => item.classList.remove('active'));

         setTimeout(() => {
            loader.classList.remove('active');
            const targetItem = officesPopup.querySelector(`.offices-popup__items[data-offices="${target}"]`);
            targetItem?.classList.add('active');
         }, 600);
      });
   });
}



/*==========================================================================
bc slider inter
============================================================================*/
function initBcPageInterSlider() {
   const interSlider = document.querySelector(".bc-hero__slide-gallery-images");
   if (!interSlider || typeof Swiper === 'undefined') return;

   new Swiper(interSlider, {
      loop: true,
      freeMode: true,
      spaceBetween: 32,
      speed: 8000,
      autoplay: {
         delay: 0,
         disableOnInteraction: true
      },
      breakpoints: {
         320: { slidesPerView: 1.5, spaceBetween: 10 },
         650: { slidesPerView: 2, spaceBetween: 20 },
         1100: { slidesPerView: 3, spaceBetween: 32 },
         1600: { slidesPerView: 4, spaceBetween: 32 },
      }
   });
}


/*==========================================================================
Galleries
============================================================================*/
function initBcPageGalleries() {
   if (typeof Fancybox === 'undefined' || !Fancybox.bind) return;

   Fancybox.bind('[data-fancybox]', { groupAll: false });

   const openBtn = document.getElementById('js-open-offices-gallery');
   if (!openBtn) return;

   openBtn.addEventListener('click', () => {
      const items = Array.from(document.querySelectorAll('[data-fancybox="offices"]')).map(el => ({
         src: el.getAttribute('href'),
         type: 'image',
      }));

      if (items.length) {
         Fancybox.show(items, { startIndex: 0 });
      }
   });
}


/*==========================================================================
Map
============================================================================*/
function initMap() {
   const mapElement = document.getElementById('map');
   if (!mapElement) return;

   if (typeof ymaps === 'undefined') return;

   ymaps.ready(() => {
      const mapCenter = [55.742405, 37.629388];
      const myMap = new ymaps.Map('map', {
         center: mapCenter,
         zoom: 13,
      }, {
         searchControlProvider: 'yandex#search'
      });

      let iconImageSize = window.innerWidth < 768 ? [60, 80] : [90, 100];
      let iconImageOffset = window.innerWidth < 768 ? [-42.5, -100] : [-67, -130];

      const myPlacemark = new ymaps.Placemark(mapCenter, {
         hintContent: 'Офисы в Москве',
         balloonContent: 'Россия, Москва, Пятницкий пер., д.3, м.Новокузнецкая'
      }, {
         iconLayout: 'default#image',
         iconImageHref: 'img/map-location.png',
         iconImageSize: iconImageSize,
         iconImageOffset: iconImageOffset
      });

      myMap.behaviors.disable('scrollZoom');
      myMap.controls.remove('searchControl');
      myMap.controls.remove('fullscreenControl');
      myMap.controls.remove('rulerControl');
      myMap.geoObjects.add(myPlacemark);

      window.addEventListener('resize', () => {
         const newIconImageSize = window.innerWidth < 768 ? [85, 100] : [170, 200];
         const newIconImageOffset = window.innerWidth < 768 ? [-42.5, -100] : [-85, -200];
         myPlacemark.options.set({
            iconImageSize: newIconImageSize,
            iconImageOffset: newIconImageOffset,
         });
      });
   });
}



/*==========================================================================
Calendar
============================================================================*/
function initCalendar() {
   if (typeof AirDatepicker === 'undefined') return;

   const datepickers = document.querySelectorAll('.datepicker');
   if (!datepickers.length) return;

   const tomorrow = new Date();
   tomorrow.setDate(tomorrow.getDate() + 1);

   datepickers.forEach(el => {
      new AirDatepicker(el, {
         minDate: tomorrow,
         autoClose: true
      });
   });
}



/*==========================================================================
Init
============================================================================*/
document.addEventListener('DOMContentLoaded', () => {
   initSubmenu();
   initPreloader();
   initHeaderFix();
   initObserverAnimation();
   initMoveButtons();
   initRelatedSlider();
   initFilterTabs();
   initProductCardSwipers();
   initReviewsSlider();
   initBestSlider();
   initCatalogSort();
   initScrollTop();
   initCatalogAside();
   initBusinessCenterSlider();
   initGallery();
   initHiddenText();
   initOfficeCardSwipers();
   initOfficeTabs();
   initOfficeGallerySliders();
   initOfficeGalleryLightbox();
   initNewBcPageSlider();
   initBcPageOfficeTabs();
   initBcPageInterSlider();
   initBcPageGalleries();
   initMap();
   initCalendar();
});

})();

/******/ })()
;