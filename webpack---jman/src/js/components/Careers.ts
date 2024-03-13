
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
const ScrollTrigger_1 = __importDefault(__webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js"));
const gsap_1 = __importDefault(__webpack_require__(/*! gsap */ "./node_modules/gsap/index.js"));
class Careers {
    $container = (0, jquery_1.default)('#careers-board');
    location = 'london';
    $stickySection = (0, jquery_1.default)('#careers-sticky');
    constructor() {
        if (this.$container.length > 0) {
            this.handleLocation();
            this.toggleLocationContent();
            this.setLocationFromHash();
        }
        if (this.$stickySection.length > 0) {
            gsap_1.default.registerPlugin(ScrollTrigger_1.default);
            this.stickySection();
        }
    }
    setLocationFromHash = () => {
        if (window.location.hash && window.location.hash.includes('location-')) {
            this.location = window.location.hash.split('-')[1];
            (0, jquery_1.default)(`.location-btn[data-target="${this.location}"]`).addClass('cyan').removeClass('transparent')
                .siblings('.btn').removeClass('cyan').addClass('transparent');
            this.toggleLocationContent();
        }
    };
    handleLocation = () => {
        (0, jquery_1.default)('.location-btn').on('click', ({ currentTarget }) => {
            window.setTimeout(() => {
                location.reload();
            }, 500);
        });
    };
    filterSlides = () => {
        let $carousel = (0, jquery_1.default)('#careers-people .carousel');
    };
    toggleLocationContent = () => {
        (0, jquery_1.default)('.location-target').addClass('hidden');
        (0, jquery_1.default)(`.location-target[data-location="${this.location}"]`).removeClass('hidden');
        this.filterSlides();
    };
    stickySection = () => {
        if (window.innerWidth < 768) {
            return false;
        }
        let windowHeight = (0, jquery_1.default)(window).length > 0 ? (0, jquery_1.default)(window).height() : 0;
        let end = (this.$stickySection.height() - windowHeight / 3) - this.$stickySection.find('.opening').height() - 200;
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: '#careers-sticky',
                start: "top top",
                end: "+=" + end,
                pin: ".pin-on-scroll",
                scrub: 2,
            },
            opacity: 1,
        });
        return true;
    };
}
exports["default"] = Careers;


//# sourceURL=webpack://jman/./src/js/components/Careers.ts?