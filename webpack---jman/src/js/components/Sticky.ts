
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
const ScrollTrigger_1 = __importDefault(__webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js"));
const gsap_1 = __importDefault(__webpack_require__(/*! gsap */ "./node_modules/gsap/index.js"));
class Sticky {
    constructor() {
        gsap_1.default.registerPlugin(ScrollTrigger_1.default);
        (0, jquery_1.default)(document).ready(() => {
            this.setup();
        });
    }
    setup = () => {
        if (window.innerWidth < 992 || (0, jquery_1.default)('.sticky').length === 0) {
            return false;
        }
        const stickies = gsap_1.default.utils.toArray('.sticky');
        stickies.forEach((sticky) => {
            if ((0, jquery_1.default)(sticky).closest('section').length > 0 && (0, jquery_1.default)(sticky).find('div').length > 0) {
                let end = (0, jquery_1.default)(sticky).closest('section').height() - (0, jquery_1.default)(sticky).find('div').height();
                gsap_1.default.timeline({
                    scrollTrigger: {
                        trigger: (0, jquery_1.default)(sticky).closest('section'),
                        start: "top 200px",
                        end: "+=" + end,
                        pin: '.sticky',
                        scrub: 2,
                    },
                    opacity: 1,
                });
            }
        });
        return true;
    };
}
exports["default"] = Sticky;


//# sourceURL=webpack://jman/./src/js/components/Sticky.ts?