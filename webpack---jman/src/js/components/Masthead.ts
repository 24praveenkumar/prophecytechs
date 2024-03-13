
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
class Masthead {
    $nav = (0, jquery_1.default)('#main-nav');
    scrollDist = window.pageYOffset;
    constructor() {
        this.handleMainNav();
        this.handleSubMenu();
        this.onWhiteHero();
        (0, jquery_1.default)(window).on('scroll', this.onScroll);
    }
    onScroll = () => {
        this.scrollDist = window.pageYOffset;
        if (this.scrollDist > 100) {
            this.$nav.addClass('scrolled').removeClass('blue');
        }
        else {
            this.$nav.removeClass('scrolled');
            if (this.hasWhiteHero()) {
                this.$nav.addClass('blue');
            }
        }
    };
    handleMainNav = () => {
        this.$nav.find('.menu-button button').on('click', () => {
            this.$nav.toggleClass('active');
            (0, jquery_1.default)('body').toggleClass('navigation-active');
        });
        this.$nav.find('a').on('click', () => {
            this.closeNav();
        });
    };
    closeNav = () => {
        this.$nav.removeClass('active');
        (0, jquery_1.default)('body').removeClass('navigation-active');
    };
    handleSubMenu = () => {
        let activeClasses = 'active active-hover';
        this.$nav.find('li.current-menu-item').addClass(activeClasses);
        this.$nav.find('li').on('mouseenter', function () {
            (0, jquery_1.default)(this).addClass(activeClasses);
            (0, jquery_1.default)(this).siblings('li').removeClass(activeClasses);
        });
    };
    hasWhiteHero = () => {
        return (0, jquery_1.default)('#primary').hasClass('white');
    };
    onWhiteHero = () => {
        if (this.hasWhiteHero()) {
            this.$nav.addClass('blue');
        }
    };
}
exports["default"] = Masthead;


//# sourceURL=webpack://jman/./src/js/components/Masthead.ts?