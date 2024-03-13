
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
const gsap_1 = __importDefault(__webpack_require__(/*! gsap */ "./node_modules/gsap/index.js"));
class Accordion {
    $accordion = (0, jquery_1.default)('.accordion');
    timelines = [];
    constructor() {
        this.setup();
        this.onLocationChange();
        (0, jquery_1.default)(window).on('resize', () => {
            this.setup();
        });
    }
    setup = () => {
        this.$accordion.each((index, $element) => {
            (0, jquery_1.default)($element).find('article').each((index, $article) => {
                this.createTimeline((0, jquery_1.default)($article).find('main'), index);
            });
            (0, jquery_1.default)($element).find('header').on('click', ({ currentTarget }) => {
                let $article = (0, jquery_1.default)(currentTarget).closest('article');
                let index = parseInt($article.attr('data-index'));
                let isActive = $article.hasClass('active');
                this.open(index, isActive);
            });
        });
    };
    createTimeline = ($main, index) => {
        let tl = gsap_1.default.timeline();
        let height = this.calculateMainHeight($main);
        tl.to($main, {
            height: height + 'px',
            duration: (height / 500) * 0.5,
            ease: "back.out(1.7)"
        });
        tl.pause();
        this.timelines[index] = tl;
    };
    calculateMainHeight = ($main) => {
        let totalHeight = 60;
        (0, jquery_1.default)($main).find('.content-inner').each(function () {
            totalHeight += (0, jquery_1.default)(this).height();
        });
        return totalHeight;
    };
    open = (timelineIndex, reverse = false) => {
        this.timelines.forEach((item, index) => {
            this.timelines[index].reverse();
        });
        this.$accordion.find(`article:nth-child(${timelineIndex + 1})`).toggleClass('active')
            .siblings('article').removeClass('active');
        reverse ? this.timelines[timelineIndex].reverse() : this.timelines[timelineIndex].play();
    };
    onLocationChange = () => {
        (0, jquery_1.default)('.location-btn').on('click', () => {
            console.log('reset');
            this.setup();
        });
    };
}
exports["default"] = Accordion;


//# sourceURL=webpack://jman/./src/js/components/Accordion.ts?