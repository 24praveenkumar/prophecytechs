
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
__webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
class WhatWeDoCarousel {
    $container = (0, jquery_1.default)('#what-home');
    $carousel = this.$container.find('.carousel');
    $slideSelection = this.$container.find('.slide-selection ul');
    constructor() {
        if (this.$container.length > 0) {
            this.setup();
            this.hashNavigation();
        }
        addEventListener('hashchange', event => { this.hashNavigation(); });
    }
    setup = () => {
        this.$carousel.slick({
            arrows: true,
            prevArrow: this.$container.find('.carousel-navigation .left'),
            nextArrow: this.$container.find('.carousel-navigation .right'),
            dots: true,
            appendDots: this.$container.find('.module-para-selector'),
            asNavFor: this.$slideSelection,
            variableWidth: true,
            infinite: false,
            swipeToSlide: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            accessibility: true,
            focusOnSelect: false,
            centerMode: false,
            touchThreshold: 100
        });
        this.$slideSelection.slick({
            arrows: false,
            asNavFor: this.$carousel,
            variableWidth: true,
            infinite: false,
            focusOnSelect: true,
            draggable: false
        });
    };
    hashNavigation() {
        if (!window.location.hash && this.$container.length === 0) {
            return false;
        }
        let hash = window.location.hash;
        if (hash.includes('what-')) {
            let scrollToIndex = hash.split('-')[1];
            (0, jquery_1.default)('html, body').animate({
                scrollTop: (0, jquery_1.default)("#what-home").offset().top + 200
            }, 2000);
            this.$carousel.slick('slickGoTo', scrollToIndex);
        }
    }
}
exports["default"] = WhatWeDoCarousel;


//# sourceURL=webpack://jman/./src/js/components/WhatWeDoCarousel.ts?