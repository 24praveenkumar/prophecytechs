
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
class Skillset {
    $container = (0, jquery_1.default)('#about-skillset');
    $button = this.$container.find('.buttons a');
    constructor() {
        this.setup();
        this.handleVennDiagram();
    }
    setup = () => {
        this.onButtonClick();
        this.$container.find('.venn:not(.active)').css('opacity', 0);
    };
    onButtonClick = () => {
        this.$button.on('click', (evt) => {
            evt.preventDefault();
            let target = (0, jquery_1.default)(evt.currentTarget).attr('data-target');
            if (target) {
                this.handleVennSwitch(target);
            }
            (0, jquery_1.default)(evt.currentTarget).addClass('salmon').removeClass('transparent')
                .siblings('a').removeClass('salmon').addClass('transparent');
        });
    };
    handleVennSwitch = (targetClass) => {
        let $target = this.$container.find(targetClass);
        if (!$target.hasClass('active')) {
            console.log($target);
            $target.siblings('.venn').animate({ opacity: 0 }, 500, function () {
                (0, jquery_1.default)(this).removeClass('active');
                $target.addClass('active').animate({ opacity: 1 }, 500);
            });
        }
    };
    handleVennDiagram = () => {
        if ((0, jquery_1.default)('.venn').length === 0) {
            return false;
        }
        let $svg = (0, jquery_1.default)('.venn svg');
        $svg.each(function () {
            let $circles = (0, jquery_1.default)(this).find('#circles');
            let selectedCircle = null;
            $circles.find('g').on('click', ({ currentTarget }) => {
                selectedCircle = (0, jquery_1.default)(currentTarget).attr('id');
                (0, jquery_1.default)(currentTarget).addClass('active').siblings('g').removeClass('active');
                (0, jquery_1.default)(this).find('[data-name="icon"]').removeClass('active');
                (0, jquery_1.default)(this).find(`#icon_${selectedCircle}`).addClass('active');
                (0, jquery_1.default)(this).find('[data-name="title"]').removeClass('active');
                (0, jquery_1.default)(this).find(`#title_${selectedCircle}`).addClass('active');
                (0, jquery_1.default)(this).find('[data-name="content"]').removeClass('active');
                (0, jquery_1.default)(this).find(`#content_${selectedCircle}`).addClass('active');
                (0, jquery_1.default)(this).find('[data-name="line"]').removeClass('active');
                (0, jquery_1.default)(this).find(`#line_${selectedCircle}`).addClass('active');
            });
        });
        return true;
    };
}
exports["default"] = Skillset;


//# sourceURL=webpack://jman/./src/js/components/Skillset.ts?