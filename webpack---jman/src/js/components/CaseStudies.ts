
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
__webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
class CaseStudies {
    $container = (0, jquery_1.default)('#case-studies-post');
    $catButtons = (0, jquery_1.default)('.cat-buttons a.btn');
    selectedCat = 'commercial-insights';
    constructor() {
        this.setup();
        this.caseStudyCarousel();
        if (this.$container.length > 0) {
            this.hasURLSelection();
            this.handleCategorySelector();
            this.handleShowDetail();
            this.setNumbers();
        }
    }
    setup = () => {
        this.$container.find(`article.${this.selectedCat}`).addClass('active');
        (0, jquery_1.default)(`.cat-buttons a.btn[data-target="${this.selectedCat}"]`).addClass('white').removeClass('transparent');
    };
    handleCategorySelector = () => {
        this.$catButtons.on('click', ({ currentTarget }) => {
            if (typeof (0, jquery_1.default)(currentTarget).attr('data-target') !== undefined) {
                this.setSelectedCategory((0, jquery_1.default)(currentTarget).attr('data-target'));
            }
        });
    };
    setSelectedCategory = (slug) => {
        this.selectedCat = slug;
        (0, jquery_1.default)(`.cat-buttons a.btn[data-target="${slug}"]`).addClass('white').removeClass('transparent')
            .siblings('a.white').addClass('transparent').removeClass('white');
        this.$container.find(`article.${slug}`).addClass('active').siblings(`article:not(.${slug})`).removeClass('active');
        window.location.hash = slug;
        this.setNumbers();
    };
    handleShowDetail = () => {
        (0, jquery_1.default)('a.btn.more').on('click', ({ currentTarget }) => {
            let $siblingArticles = (0, jquery_1.default)(currentTarget).closest('article').siblings('article');
            $siblingArticles.find('.more-info').removeClass('active');
            this.showDetailBtnText(false, $siblingArticles.find('.more'));
            (0, jquery_1.default)(currentTarget).siblings('.more-info').toggleClass('active');
            if ((0, jquery_1.default)(currentTarget).hasClass('white')) {
                this.showDetailBtnText(false, (0, jquery_1.default)(currentTarget));
                this.scrollToTopOfCaseStudy((0, jquery_1.default)(currentTarget).closest('article'));
            }
            else {
                this.showDetailBtnText(true, (0, jquery_1.default)(currentTarget));
            }
        });
    };
    showDetailBtnText = (less, $button) => {
        if (less) {
            (0, jquery_1.default)($button).addClass('white').removeClass('transparent');
            (0, jquery_1.default)($button).find('span').html('Show less');
        }
        else {
            (0, jquery_1.default)($button).removeClass('white').addClass('transparent');
            (0, jquery_1.default)($button).find('span').html('Show detail');
        }
    };
    setNumbers = () => {
        this.$container.find('article.active').each(function (index) {
            (0, jquery_1.default)(this).find('figure .number').html(`0${index + 1}`);
        });
    };
    caseStudyCarousel = () => {
        let $carousel = (0, jquery_1.default)('.case-studies .carousel');
        if ($carousel.length > 0) {
            (0, jquery_1.default)('#case-studies-home .image-wrapper.carousel').slick({
                arrows: false,
                dots: false,
                infinite: false,
                fade: true
            });
            $carousel.slick({
                arrows: true,
                prevArrow: (0, jquery_1.default)('.case-studies').find('.carousel-navigation .left'),
                nextArrow: (0, jquery_1.default)('.case-studies').find('.carousel-navigation .right'),
                infinite: false,
                dots: false,
                fade: false,
                asNavFor: (0, jquery_1.default)('#case-studies-home .image-wrapper.carousel')
            });
        }
    };
    hasURLSelection = () => {
        if (window.location.hash) {
            this.setSelectedCategory(window.location.hash.substring(1));
            (0, jquery_1.default)('html, body').animate({
                scrollTop: (0, jquery_1.default)("#case-studies-post").offset().top
            }, 0);
        }
    };
    scrollToTopOfCaseStudy = (article) => {
        if (article.length > 0) {
            (0, jquery_1.default)('html, body').animate({
                scrollTop: (0, jquery_1.default)(article).offset().top - 150
            }, 0);
        }
    };
}
exports["default"] = CaseStudies;


//# sourceURL=webpack://jman/./src/js/components/CaseStudies.ts?