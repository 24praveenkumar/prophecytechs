
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
__webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
class PartnersCarousel {
    container = (0, jquery_1.default)('#partners');
    selected = '.work-with';
    activeCarousel = null;
    carouselSettings = {
        speed: 9000,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
    };
    constructor() {
        this.handleSelection();
        this.setupCarousel();
    }
    handleSelection() {
        this.container.find('.selector span').on('click', ({ target }) => {
            (0, jquery_1.default)(target).addClass('active').siblings('span').removeClass('active');
            this.selected = (0, jquery_1.default)(target).attr('data-target');
            this.container.find('.carousel' + this.selected).addClass('active').siblings('.carousel').removeClass('active');
            this.destroyCarousel();
            this.setupCarousel();
        });
    }
    setupCarousel() {
        this.activeCarousel = this.container.find('.carousel' + this.selected).slick(this.carouselSettings);
    }
    destroyCarousel() {
        if (this.activeCarousel) {
            this.activeCarousel.slick('unslick');
        }
    }
}
exports["default"] = PartnersCarousel;


//# sourceURL=webpack://jman/./src/js/components/PartnersCarousel.ts?