
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
__webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
class OurValues {
    $container = (0, jquery_1.default)('#careers-values');
    $carousel = (0, jquery_1.default)('#careers-values .carousel');
    constructor() {
        if (this.$carousel.length > 0) {
            this.setCarouselWidth();
            this.setup();
            this.setupContent();
        }
    }
    setCarouselWidth = () => {
        let containerWidth = (0, jquery_1.default)('#careers-values').find('.container').width();
        let windowWidth = (0, jquery_1.default)(window).width();
        let rightMargin = (windowWidth - containerWidth) / 2;
        this.$carousel.css('width', `calc(100% + ${rightMargin}px)`);
    };
    setup = () => {
        this.$carousel.slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            prevArrow: this.$container.find('.carousel-navigation .prev'),
            nextArrow: this.$container.find('.carousel-navigation .next'),
            infinite: true,
            swipeToSlide: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1920,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    };
    setupContent = () => {
        this.$carousel.find('article').each((index, item) => {
            let $item = (0, jquery_1.default)(item);
            let $content = $item.find('.content');
            if ($content.length > 0) {
                $item.addClass('has-content');
            }
            $item.find('.title').on('click', () => {
                this.$carousel.find('article .content').removeClass('active');
                this.$carousel.find('article .title').removeClass('active');
                $item.find('.content').toggleClass('active');
                $item.find('.title').toggleClass('active');
            });
        });
    };
}
exports["default"] = OurValues;


//# sourceURL=webpack://jman/./src/js/components/OurValues.ts?