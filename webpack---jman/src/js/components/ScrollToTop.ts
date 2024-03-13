
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
class ScrollToTop {
    button = (0, jquery_1.default)('.scroll-to-top');
    constructor() {
        this.button.on('click', this.handleClick);
    }
    handleClick() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }
}
exports["default"] = ScrollToTop;


//# sourceURL=webpack://jman/./src/js/components/ScrollToTop.ts?