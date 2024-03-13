
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
class Popup {
    $popup = (0, jquery_1.default)('.module-popup');
    constructor() {
        if (this.$popup.length > 0) {
            this.handleOpen();
            this.handleClose();
        }
    }
    handleOpen() {
        (0, jquery_1.default)('.open-popup').on('click', function () {
            let popupID = (0, jquery_1.default)(this).attr('data-popup-id');
            let $popup = (0, jquery_1.default)(`#popup-id-${popupID}`);
            $popup.addClass('active');
        });
    }
    handleClose() {
        this.$popup.find('.close, .background').on('click', function () {
            let $container = (0, jquery_1.default)(this).closest('.module-popup');
            (0, jquery_1.default)(this).closest('.module-popup').removeClass('active');
        });
    }
}
exports["default"] = Popup;


//# sourceURL=webpack://jman/./src/js/components/Popup.ts?