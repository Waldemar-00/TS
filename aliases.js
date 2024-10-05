function createAnimation(id, name, duration, delay, easing, iterations) {
    console.log("Animation ".concat(name, " has: id ").concat(id, ",  duration ").concat(duration, ", delay ").concat(delay, ", easing '").concat(easing, "', iterations ").concat(iterations));
}
createAnimation('somestring', 'Reactive', 700, 200, 'ease-in', 1);
function createAnimation_1(id, name, duration, delay, easing, iterations) {
    console.log("Animation ".concat(name, " has: id ").concat(id, "  duration ").concat(duration, ", delay ").concat(delay, ", easing '").concat(easing, "', iterations ").concat(iterations));
}
createAnimation_1(crypto.randomUUID(), 'Reactive', 700, 200, 'ease-in', 1);
