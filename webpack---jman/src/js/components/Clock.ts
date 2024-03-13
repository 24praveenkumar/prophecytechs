
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const jquery_1 = __importDefault(__webpack_require__(/*! jquery */ "jquery"));
class Clock {
    $container = (0, jquery_1.default)('.module-global-times');
    constructor() {
        this.getTimes();
        window.setInterval(this.getTimes, 30000);
    }
    getTimes = () => {
        let options = {
            timeZone: 'Europe/London',
            hour: 'numeric',
            minute: 'numeric',
        };
        let london = new Intl.DateTimeFormat([], options).format(new Date());
        options.timeZone = 'Asia/Kolkata';
        let chennai = new Intl.DateTimeFormat([], options).format(new Date());
        options.timeZone = 'America/New_York';
        let newYork = new Intl.DateTimeFormat([], options).format(new Date());
        this.setTime('london', london);
        this.setTime('chennai', chennai);
        this.setTime('new-york', newYork);
    };
    setTime = (city, time) => {
        this.$container.find(`.${city} span.time`).html(time);
    };
}
exports["default"] = Clock;


//# sourceURL=webpack://jman/./src/js/components/Clock.ts?