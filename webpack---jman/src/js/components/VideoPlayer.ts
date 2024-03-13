
Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    $el;
    video;
    playing = false;
    constructor($el) {
        this.$el = $el;
        if (this.$el.length > 0) {
            this.video = this.$el.find('video')[0];
            this.init();
        }
    }
    init() {
        this.$el.on('click', () => {
            if (!this.playing) {
                this.playVideo();
            }
            else {
                this.pauseVideo();
            }
        });
        this.video.addEventListener('ended', () => {
            this.pauseVideo();
        });
    }
    playVideo = () => {
        console.log(this.video);
        this.playing = true;
        this.video.play();
        this.$el.addClass('playing');
    };
    pauseVideo = () => {
        this.playing = false;
        this.video.pause();
        this.$el.removeClass('playing');
    };
}
exports["default"] = VideoPlayer;


//# sourceURL=webpack://jman/./src/js/components/VideoPlayer.ts?