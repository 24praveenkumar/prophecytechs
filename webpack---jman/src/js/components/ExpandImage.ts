
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
class ExpandImage {
    $container = (0, jquery_1.default)('section.post-container');
    constructor() {
        if (this.$container.length > 0) {
            this.init();
        }
    }
    init() {
        this.$container.find('img').on('click', this.handleClick);
    }
    handleClick = ({ currentTarget }) => {
        const target = (0, jquery_1.default)(currentTarget);
        console.log(target);
        target.toggleClass('grow');
    };
}
exports["default"] = ExpandImage;


//# sourceURL=webpack://jman/./src/js/components/ExpandImage.ts?