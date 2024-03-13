
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
__webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
const gsap_1 = __importDefault(__webpack_require__(/*! gsap */ "./node_modules/gsap/index.js"));
const ScrollTrigger_1 = __importDefault(__webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js"));
class Hero {
    container = (0, jquery_1.default)('#hero.home');
    wrapper = this.container.find('.horizontal-scroll');
    $panelsContainer = (0, jquery_1.default)("#home-hero-panels");
    activeSlide = -1;
    timelines = [];
    constructor() {
        gsap_1.default.registerPlugin(ScrollTrigger_1.default);
        this.setup();
    }
    onLoaded() {
        this.$panelsContainer.find('.title').animate({ opacity: 1 }, 250);
    }
    setup() {
        if (this.wrapper.length === 0) {
            return false;
        }
        const panels = gsap_1.default.utils.toArray("#home-hero-panels article");
        panels.forEach((panel, index) => {
            (0, jquery_1.default)(panel).find('.title').html(this.splitTitle((0, jquery_1.default)(panel).find('.title').html()));
            this.setupTimeline(index);
        });
        let end = 2500;
        if (window.innerWidth < 768) {
            end = 1200;
        }
        gsap_1.default.to(panels, {
            ease: "none",
            onStart: () => {
                this.onLoaded();
            },
            scrollTrigger: {
                trigger: "#hero.home",
                pin: true,
                start: "top top",
                onEnterBack: () => {
                    (0, jquery_1.default)('#main-nav').removeClass('blue');
                },
                onUpdate: (self) => { this.onScroll(self.progress.toFixed(2)); },
                scrub: 2,
                snap: {
                    snapTo: 1 / (panels.length - 1),
                    inertia: false,
                    duration: { min: 0.1, max: 0.1 }
                },
                end: () => end
            }
        });
    }
    splitTitle(title) {
        let lines = title.split("\n");
        let newTitle = "";
        lines.forEach(function (line) {
            if (line) {
                newTitle += '<span class="word"><span class="word-inner" style="transform: translateY(100%);">' + line.trim() + '</span></span>';
            }
        });
        return newTitle;
    }
    onScroll(progress) {
        if (progress > 0.3) {
            this.setActiveSlide(1);
        }
        else {
            this.setActiveSlide(0);
        }
    }
    setActiveSlide(slide) {
        if (slide === this.activeSlide) {
            return;
        }
        if (typeof this.timelines[this.activeSlide] !== 'undefined') {
            this.timelines[this.activeSlide].reverse().then(() => {
                this.timelines[slide].play();
            });
        }
        else {
            this.timelines[slide].play();
        }
        this.activeSlide = slide;
    }
    setupTimeline = (slide) => {
        let tl = gsap_1.default.timeline();
        let $article = (0, jquery_1.default)("#home-hero-panels").find(`article:nth-child(${slide + 1})`);
        let $image = $article.find('figure.motif');
        let $titleWords = $article.find('.title .word-inner');
        let $content = $article.find('.content-wrapper');
        let $slideNums = $article.find('.slide-numbers');
        tl.from($image, { duration: 0.1, opacity: 0 })
            .from($content, { duration: 0.1, opacity: 0 })
            .from($slideNums, { duration: 0.25, opacity: 0 })
            .to($image, { duration: 0.5, opacity: 1 });
        $titleWords.each((index, element) => {
            tl.to((0, jquery_1.default)(element), { duration: 0.75, y: "0%", ease: "back.out(1.7)" }, 0.5 + 0.15 * index);
        });
        tl.to($content, { duration: 0.5, opacity: 1 }, 1.5)
            .to($slideNums, { duration: 0.5, opacity: 1 }, 1.5)
            .then(() => { return true; });
        tl.pause();
        this.timelines[slide] = tl;
    };
}
exports["default"] = Hero;


//# sourceURL=webpack://jman/./src/js/components/Hero.ts?