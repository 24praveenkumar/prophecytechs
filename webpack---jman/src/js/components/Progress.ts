
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
const gsap_1 = __importDefault(__webpack_require__(/*! gsap */ "./node_modules/gsap/index.js"));
const ScrollTrigger_1 = __importDefault(__webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js"));
class Progress {
    $container = (0, jquery_1.default)('#module-progress');
    $progress = this.$container.find('.progress');
    $label = this.$container.find('.section-title');
    $masthead = (0, jquery_1.default)('#main-nav');
    scrollTrigger = null;
    constructor() {
        gsap_1.default.registerPlugin(ScrollTrigger_1.default);
        this.onLoad();
        this.onScroll();
        this.setupTriggers();
        if ((0, jquery_1.default)('#primary.white').length > 0) {
            this.onSectionTrigger((0, jquery_1.default)('section:first-of-type'));
        }
    }
    onLoad() {
        this.$container.addClass('loaded');
    }
    onScroll() {
        if (this.$container.length > 0) {
            window.setTimeout(() => {
                this.scrollTrigger = ScrollTrigger_1.default.create({
                    trigger: "body",
                    start: "top center",
                    end: "+=" + (0, jquery_1.default)('body').height(),
                    onUpdate: self => this.setProgress(self.progress)
                });
            }, 1000);
        }
    }
    setupTriggers() {
        const sections = gsap_1.default.utils.toArray('section');
        sections.forEach(section => {
            ScrollTrigger_1.default.create({
                trigger: section,
                start: "top 400px",
                end: "bottom bottom",
                onEnter: self => this.onSectionTrigger(self.trigger),
                onEnterBack: self => this.onSectionTrigger(self.trigger),
            });
        });
    }
    onSectionTrigger(trigger) {
        if (typeof trigger === undefined) {
            return false;
        }
        let $elem = (0, jquery_1.default)(trigger);
        let sectionTitle = $elem.attr('data-title');
        if (sectionTitle) {
            this.$label.html(sectionTitle);
        }
        if ($elem.hasClass('section-white')) {
            this.$container.addClass('blue');
        }
        else {
            this.$container.removeClass('blue');
        }
    }
    setProgress(progress) {
        this.$progress.height(`${progress * 105}%`);
    }
}
exports["default"] = Progress;


//# sourceURL=webpack://jman/./src/js/components/Progress.ts?