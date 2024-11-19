"use strict";
const player1 = {
    game: "CS:GO",
    hours: 300,
    server: "basic",
};
const player2 = {
    game: 2048,
    hours: "300 h.",
    server: "arcade",
};
const player3 = {
    game: "Chess",
    hours: {
        total: 500,
        inMenu: 50,
    },
    server: "chess",
};
function calculateAmountOfFigures(figure) {
    const amountFigures = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0,
    };
    figure.forEach((obj) => {
        switch (obj.name) {
            case 'rect':
                amountFigures.squares++;
                break;
            case 'circle':
                amountFigures.circles++;
                break;
            case 'triangle':
                amountFigures.triangles++;
                break;
            default:
                amountFigures.others++;
                break;
        }
    });
    return amountFigures;
}
const datas = [
    {
        name: "rect",
        data: { a: 5, b: 10 },
    },
    {
        name: "rect",
        data: { a: 6, b: 11 },
    },
    {
        name: "triangle",
        data: { a: 5, b: 10, c: 14 },
    },
    {
        name: "line",
        data: { l: 15 },
    },
    {
        name: "circle",
        data: { r: 10 },
    },
    {
        name: "circle",
        data: { r: 5 },
    },
    {
        name: "rect",
        data: { a: 15, b: 7 },
    },
    {
        name: "triangle",
    },
];
console.log(calculateAmountOfFigures(datas));
