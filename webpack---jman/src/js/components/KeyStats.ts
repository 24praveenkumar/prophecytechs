
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
const gsap_1 = __importDefault(__webpack_require__(/*! gsap */ "./node_modules/gsap/index.js"));
const ScrollTrigger_1 = __importDefault(__webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js"));
class KeyStats {
    $markers = (0, jquery_1.default)('.key-stat-marker');
    $stats = (0, jquery_1.default)('.stat');
    timelines = [];
    constructor() {
        if (!this.$markers.length || !this.$stats.length)
            return;
        this.setupScrollTriggers();
    }
    setupScrollTriggers() {
        this.$markers.each((i, marker) => {
            let statID = (0, jquery_1.default)(marker).attr('id');
            ScrollTrigger_1.default.create({
                trigger: marker,
                start: 'top 20%',
                end: 'bottom 20%',
                onEnter: () => {
                    if (statID) {
                        this.showKeyStat(statID);
                    }
                },
                onEnterBack: () => {
                    if (statID) {
                        this.showKeyStat(statID);
                    }
                },
                onLeave: () => {
                    if (statID) {
                        this.hideKeyStat(statID);
                    }
                },
                onLeaveBack: () => {
                    if (statID) {
                        this.hideKeyStat(statID, true);
                    }
                },
            });
        });
    }
    showKeyStat(statID) {
        let statHeight = (0, jquery_1.default)('.stat[data-marker="' + statID + '"] .stat__inner').height();
        gsap_1.default.to('.key-stat-title', {
            opacity: 1,
            duration: 1,
            ease: 'power4.out'
        });
        gsap_1.default.to('.stat[data-marker="' + statID + '"]', {
            opacity: 1,
            height: statHeight,
            marginBottom: '2rem',
            duration: 1,
            ease: 'power4.out'
        });
    }
    hideKeyStat(statID, hideTitle = false) {
        if (hideTitle && (0, jquery_1.default)('.stat[data-marker="' + statID + '"]').index() == 1) {
            gsap_1.default.to('.key-stat-title', {
                opacity: 0,
                duration: 1,
                ease: 'power4.out'
            });
        }
        gsap_1.default.to('.stat[data-marker="' + statID + '"]', {
            opacity: 0,
            height: 0,
            marginBottom: '0rem',
            duration: 1,
            ease: 'power4.out'
        });
    }
}
exports["default"] = KeyStats;


//# sourceURL=webpack://jman/./src/js/components/KeyStats.ts?