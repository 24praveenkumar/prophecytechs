
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
class Faq {
    $container = (0, jquery_1.default)('#careers-faq');
    $articles = this.$container.find('article');
    constructor() {
        if (this.$container.length > 0) {
            this.setup();
            this.showMore();
        }
    }
    setup = () => {
        this.$articles.each(function () {
            if (!(0, jquery_1.default)(this).hasClass('active')) {
                (0, jquery_1.default)(this).css('opacity', 0);
            }
        });
    };
    showMore = () => {
        this.$container.find('.show-more').on('click', ({ currentTarget }) => {
            this.$articles.addClass('active').animate({
                opacity: 1
            }, 500);
            (0, jquery_1.default)(currentTarget).hide();
        });
    };
}
exports["default"] = Faq;


//# sourceURL=webpack://jman/./src/js/components/Faq.ts?