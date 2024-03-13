
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
__webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
class Leadership {
    $container = (0, jquery_1.default)('#about-leadership');
    $carousel = this.$container.find('.carousel');
    $nav = this.$container.find('nav.carousel-navigation');
    constructor() {
        this.setup();
        jQuery(window).on("unload", () => {
            this.setup();
        });
    }
    setup = () => {
        this.$carousel.slick({
            slidesToShow: 3,
            prevArrow: this.$nav.find('.prev'),
            nextArrow: this.$nav.find('.next'),
            infinite: true,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
            ]
        });
    };
}
exports["default"] = Leadership;


//# sourceURL=webpack://jman/./src/js/components/Leadership.ts?