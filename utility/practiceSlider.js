function createSlider(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.container, container = _c === void 0 ? "" : _c, _d = _b.numberOfSlides, numberOfSlides = _d === void 0 ? 1 : _d, _e = _b.speed, speed = _e === void 0 ? 300 : _e, _f = _b.direction, direction = _f === void 0 ? "horizontal" : _f, _g = _b.dots, dots = _g === void 0 ? true : _g, _h = _b.arrows, arrows = _h === void 0 ? true : _h;
    console.log(container, numberOfSlides, speed, direction, dots, arrows);
}
createSlider();
var customSliderOptions = {
    container: "id",
    numberOfSlides: 4,
    speed: 700,
    direction: "horizontal",
    dots: true,
    arrows: true,
    animationName: 'CustomSlider'
};
function createCustomSlider(options) {
    if ("container" in options) {
        console.log(options);
    }
}
createCustomSlider(customSliderOptions);
