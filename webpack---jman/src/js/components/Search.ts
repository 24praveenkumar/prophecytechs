
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
class Search {
    $searchBtnWrapper = (0, jquery_1.default)('.module-search-button');
    $searchBtn = this.$searchBtnWrapper.find('button');
    $searchInput = this.$searchBtnWrapper.find('input');
    constructor() {
        this.searchButton();
        if ((0, jquery_1.default)('.page.search').length > 0) {
            this.searchPage();
            this.onLoad();
        }
    }
    searchButton = () => {
        this.$searchBtn.on('click', ({ currentTarget }) => {
            (0, jquery_1.default)(currentTarget).closest('.module-search-button').addClass('active')
                .find('input').trigger('focus');
            (0, jquery_1.default)(this.$searchInput).on('focusout', () => {
                this.$searchBtnWrapper.removeClass('active');
            });
        });
    };
    searchPage = () => {
        this.highlightTerms(this.getSearchTerm());
    };
    getSearchTerm = () => {
        return (0, jquery_1.default)('.the-search-term').html();
    };
    highlightTerms = (term) => {
        (0, jquery_1.default)('article').each((index, element) => {
            this.highlighter(term, (0, jquery_1.default)(element));
        });
    };
    highlighter = (word, element) => {
        let newString = (0, jquery_1.default)(element).html().replaceAll(word, `<strong>${word}</strong>`);
        (0, jquery_1.default)(element).html(newString);
    };
    onLoad = () => {
        (0, jquery_1.default)('main#primary').addClass('loaded');
    };
}
exports["default"] = Search;


//# sourceURL=webpack://jman/./src/js/components/Search.ts?