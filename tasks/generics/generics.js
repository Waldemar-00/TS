var player1 = {
    game: "CS:GO",
    hours: 300,
    server: "basic",
};
var player2 = {
    game: 2048,
    hours: "300 h.",
    server: "arcade",
};
var player3 = {
    game: "Chess",
    hours: {
        total: 500,
        inMenu: 50,
    },
    server: "chess",
};
// Массив данных с фигурами содержит объекты, у каждого из которых обязательно есть свойство name
// Каждый объект может еще содержать дополнительные свойства в случайном виде
// Свойство name может иметь только 4 варианта
// Функция calculateAmountOfFigures должна принимать массив с объектами, у которых обязательно должно быть свойство name
// Возвращает она объект-экземпляр AmountOfFigures
// Внутри себя подсчитывает сколько каких фигур было в массиве и записывает результаты в AmountOfFigures
// С текущими данными в консоль должно попадать:
// { squares: 3, circles: 2, triangles: 2, others: 1 }
var Figures;
(function (Figures) {
    Figures["Rect"] = "rect";
    Figures["Circle"] = "circle";
    Figures["Triangle"] = "triangle";
    Figures["Line"] = "line";
})(Figures || (Figures = {}));
function calculateAmountOfFigures(figure) {
    var amountFigures = {
        squares: 0,
        circles: 0,
        triangles: 0,
        others: 0,
    };
    figure.forEach(function (obj) {
        switch (obj.name) {
            case Figures.Rect:
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
var datas = [
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
