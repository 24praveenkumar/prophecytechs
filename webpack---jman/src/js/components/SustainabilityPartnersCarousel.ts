
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
__webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
class SustainabilityPartnersCarousel {
    $container = (0, jquery_1.default)('.our-partnerships');
    carouselSettings = {
        infinite: false,
        prevArrow: this.$container.find('.partnerships.carousel-navigation .prev'),
        nextArrow: this.$container.find('.partnerships.carousel-navigation .next'),
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 5000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false,
                }
            }
        ]
    };
    constructor() {
        if (this.$container.find('.carousel.partnerships').length > 0) {
            this.setupPartnershipsCarousel();
        }
        this.setupQuoteCarousel();
        this.setupPoliciesCarousel();
    }
    setupPartnershipsCarousel() {
        this.$container.find('.carousel.partnerships').slick(this.carouselSettings);
    }
    setupQuoteCarousel() {
        this.$container.find('.carousel.quotes').slick({
            prevArrow: (0, jquery_1.default)('.jman-quotes.carousel-navigation .prev'),
            nextArrow: (0, jquery_1.default)('.jman-quotes.carousel-navigation .next'),
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: false,
            arrows: true,
            autoplay: true,
            autoplaySpeed: 8000
        });
    }
    setupPoliciesCarousel() {
        (0, jquery_1.default)('.carousel.policies').slick({
            prevArrow: (0, jquery_1.default)('.policies.carousel-navigation .prev'),
            nextArrow: (0, jquery_1.default)('.policies.carousel-navigation .next'),
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: false,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 950,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                }
            ]
        });
    }
}
exports["default"] = SustainabilityPartnersCarousel;


//# sourceURL=webpack://jman/./src/js/components/SustainabilityPartnersCarousel.ts?