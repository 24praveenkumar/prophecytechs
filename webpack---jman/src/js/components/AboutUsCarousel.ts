
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
__webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
class AboutUsCarousel {
    $container = (0, jquery_1.default)('.about-us-carousel');
    $articleCarousel = this.$container.find('.articles');
    $imagesCarousel = this.$container.find('.images');
    constructor() {
        if (this.$container.length > 0) {
            this.setup();
        }
    }
    setup = () => {
        this.$articleCarousel.on('beforeChange', (event, slick, currentSlide, nextSlide) => {
            this.changeToImage(currentSlide, nextSlide);
        });
        let autoplay = this.$articleCarousel.hasClass('autoplay');
        let autoplaySpeed = 5000;
        if (autoplay) {
            autoplaySpeed = parseInt(this.$articleCarousel.attr('data-autoplay'));
        }
        this.$articleCarousel.slick({
            fade: true,
            arrows: false,
            appendDots: (0, jquery_1.default)('#about-home').find('.slide-selection'),
            dots: true,
            autoplay: autoplay,
            autoplaySpeed: autoplaySpeed,
        });
    };
    changeToImage = (prevSlide, nextSlide) => {
        this.$imagesCarousel.find('figure').removeClass('active');
        this.$imagesCarousel
            .find(`figure.focus[data-index="${nextSlide}"]`)
            .addClass('active');
        this.$imagesCarousel
            .find(`figure.aside[data-index="${prevSlide}"]`)
            .addClass('active');
        return true;
    };
}
exports["default"] = AboutUsCarousel;


//# sourceURL=webpack://jman/./src/js/components/AboutUsCarousel.ts?