
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
__webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
class IndustryExamples {
    $container = (0, jquery_1.default)('#industry-examples');
    $matrix = this.$container.find('.matrix');
    constructor() {
        if (this.$matrix.length > 0) {
            this.setup();
            this.articles();
        }
    }
    setup = () => {
        this.hideHintOnSwipe();
        this.$matrix.slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            variableWidth: true,
            arrows: true,
            prevArrow: this.$container.find('.carousel-navigation .prev'),
            nextArrow: this.$container.find('.carousel-navigation .next'),
            infinite: false,
            swipeToSlide: true,
            dots: true,
            appendDots: this.$container.find('.carousel-dots'),
            responsive: [
                {
                    breakpoint: 1294,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    };
    hideHintOnSwipe = () => {
        this.$matrix.on('beforeChange', () => {
            this.hideHint();
        });
    };
    hideHint = () => {
        this.$container.find('.swipe-hint').removeClass('active');
    };
    articles = () => {
        this.$container.find('article .expand').on('click', ({ currentTarget }) => {
            (0, jquery_1.default)(currentTarget).closest('article').toggleClass('active');
            this.hideHint();
        });
    };
}
exports["default"] = IndustryExamples;


//# sourceURL=webpack://jman/./src/js/components/IndustryExamples.ts?