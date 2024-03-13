
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
const gsap_1 = __importDefault(__webpack_require__(/*! gsap */ "./node_modules/gsap/index.js"));
const ScrollTrigger_1 = __importDefault(__webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js"));
class PassiveAnimations {
    constructor() {
        gsap_1.default.registerPlugin(ScrollTrigger_1.default);
        this.setup();
    }
    setup = () => {
        const paragraphs = gsap_1.default.utils.toArray("main#primary p, main#primary h1, main#primary h2, main#primary h3, main#primary h4, main#primary h5, main#primary h6, main#primary li, main#posts p, main#posts h1, main#posts h2, main#posts h3, main#posts h4, main#posts h5, main#posts h6, main#posts li,.passive-anim");
        paragraphs.forEach((elem, index) => {
            if ((0, jquery_1.default)(elem).hasClass('no-anim') || (0, jquery_1.default)(elem).closest('div, section, main').hasClass('no-anim')) {
                return;
            }
            this.hide(elem);
            ScrollTrigger_1.default.create({
                trigger: elem,
                onEnter: () => { this.animateFrom(elem); },
                onEnterBack: () => { this.animateFrom(elem, -1); },
                onLeave: () => { this.hide(elem); }
            });
        });
    };
    animateFrom(elem, direction) {
        direction = direction || 1;
        var x = 0, y = direction * 100;
        if (elem.classList.contains("gs_reveal_fromLeft")) {
            x = -100;
            y = 0;
        }
        else if (elem.classList.contains("gs_reveal_fromRight")) {
            x = 100;
            y = 0;
        }
        elem.style.transform = "translate(" + x + "px, " + y + "px)";
        elem.style.opacity = "0";
        gsap_1.default.fromTo(elem, { x: x, y: y, autoAlpha: 0 }, {
            duration: 1.25,
            x: 0,
            y: 0,
            autoAlpha: 1,
            ease: "expo",
            overwrite: "auto"
        });
    }
    hide(elem) {
        gsap_1.default.set(elem, { autoAlpha: 0 });
    }
}
exports["default"] = PassiveAnimations;


//# sourceURL=webpack://jman/./src/js/components/PassiveAnimations.ts?