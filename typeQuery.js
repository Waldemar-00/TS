var controlData = {
    water: 9000,
    electric: 10000
};
function calculateControlData(data) {
    var waterCost = data.water * 1.234;
    var electricCost = data.electric * 2.124;
    return {
        waterCost: waterCost,
        electricCost: electricCost
    };
}
var resultCost = calculateControlData(controlData);
console.log(resultCost);
var PI = 3.141592653589793;
var onlyValuePI;
onlyValuePI = 3.141592653589793;
console.log(onlyValuePI);
