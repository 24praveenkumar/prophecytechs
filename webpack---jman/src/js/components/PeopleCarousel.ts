
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
__webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
class PeopleCarousel {
    $container = (0, jquery_1.default)('#careers-people');
    carouselSettings = {
        infinite: false,
        prevArrow: this.$container.find('.carousel-navigation .prev'),
        nextArrow: this.$container.find('.carousel-navigation .next'),
        slidesToShow: 2,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 2300,
                settings: {
                    slidesToShow: 1,
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
            this.$container.find('.carousel').each((index, element) => {
                console.log((0, jquery_1.default)(element));
                this.setupCarousel((0, jquery_1.default)(element));
            });
        }
        this.setupLondon();
        this.setupChennai();
    }
    setupLondon = () => {
        let londonCarousel = (0, jquery_1.default)(this.$container.find('.carousel-london'));
        let londonCarouselSettings = this.carouselSettings;
        londonCarouselSettings.prevArrow = this.$container.find('.carousel-navigation.london .prev');
        londonCarouselSettings.nextArrow = this.$container.find('.carousel-navigation.london .next');
        if (londonCarousel.length > 0) {
            londonCarousel.slick(londonCarouselSettings);
        }
    };
    setupChennai = () => {
        let londonCarousel = (0, jquery_1.default)(this.$container.find('.carousel-chennai'));
        let chennaiCarouselSettings = this.carouselSettings;
        chennaiCarouselSettings.prevArrow = this.$container.find('.carousel-navigation.chennai .prev');
        chennaiCarouselSettings.nextArrow = this.$container.find('.carousel-navigation.chennai .next');
        if (londonCarousel.length > 0) {
            londonCarousel.slick(chennaiCarouselSettings);
        }
    };
    setupCarousel($carousel, settings = this.carouselSettings) {
        $carousel = this.$container.find('.carousel').slick(settings);
    }
}
exports["default"] = PeopleCarousel;


//# sourceURL=webpack://jman/./src/js/components/PeopleCarousel.ts?