
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jQuery_1 = __importDefault(__webpack_require__(/*! jQuery */ "./node_modules/jQuery/dist/jquery.js"));
const ScrollTrigger_1 = __importDefault(__webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js"));
const gsap_1 = __importDefault(__webpack_require__(/*! gsap */ "./node_modules/gsap/index.js"));
class HowWeWork {
    constructor() {
        gsap_1.default.registerPlugin(ScrollTrigger_1.default);
        this.setup();
    }
    setup() {
        if (window.innerWidth < 768) {
            return false;
        }
        if ((0, jQuery_1.default)('#how-home').length === 0) {
            return false;
        }
        let windowHeight = (0, jQuery_1.default)(window).length > 0 ? (0, jQuery_1.default)(window).height() : 0;
        let end = (0, jQuery_1.default)('#how-home').height() - windowHeight / 3;
        gsap_1.default.timeline({
            scrollTrigger: {
                trigger: '#how-home',
                start: "top top",
                end: "+=" + end,
                pin: ".pin-on-scroll",
                scrub: 2,
            },
            opacity: 1,
        });
    }
}
exports["default"] = HowWeWork;


//# sourceURL=webpack://jman/./src/js/components/HowWeWork.ts?