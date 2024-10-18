"use strict";
function createAnimation(id, name, duration, delay, easing, iterations) {
    console.log(`Animation ${name} has: id ${id},  duration ${duration}, delay ${delay}, easing '${easing}', iterations ${iterations}`);
}
createAnimation('somestring', 'Reactive', 700, 200, 'ease-in', 1);
function createAnimation_1(id, name, duration, delay, easing, iterations) {
    console.log(`Animation ${name} has: id ${id}  duration ${duration}, delay ${delay}, easing '${easing}', iterations ${iterations}`);
}
createAnimation_1(crypto.randomUUID(), 'Reactive', 700, 200, 'ease-in', 1);
