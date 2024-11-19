"use strict";
function createSlider({ container = "", numberOfSlides = 1, speed = 300, direction = "horizontal", dots = true, arrows = true, } = {}) {
    console.log(container, numberOfSlides, speed, direction, dots, arrows);
}
createSlider();
const customSliderOptions = {
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
