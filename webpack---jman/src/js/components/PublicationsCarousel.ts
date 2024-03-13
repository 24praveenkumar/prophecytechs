
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
__webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
class PublicationsCarousel {
    $container = (0, jquery_1.default)('#publications');
    activeCarousel = null;
    carouselSettings = {
        infinite: false,
        prevArrow: this.$container.find('.carousel-navigation .prev'),
        nextArrow: this.$container.find('.carousel-navigation .next'),
        responsive: [
            {
                breakpoint: 5000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    constructor() {
        if (this.$container.find('.carousel').length > 0) {
            this.setupCarousel();
        }
    }
    setupCarousel() {
        this.activeCarousel = this.$container.find('.carousel').slick(this.carouselSettings);
    }
    destroyCarousel() {
        if (this.activeCarousel) {
            this.activeCarousel.slick('unslick');
        }
    }
}
exports["default"] = PublicationsCarousel;


//# sourceURL=webpack://jman/./src/js/components/PublicationsCarousel.ts?