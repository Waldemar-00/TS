const controlData = {
  water: 9000,
  electric: 10000
}

function calculateControlData ( data: typeof controlData ): object
{
  const waterCost = data.water * 1.234
  const electricCost = data.electric * 2.124
  return {
    waterCost,
    electricCost
  }
}

const resultCost: object = calculateControlData( controlData )
console.log(resultCost);

const PI = 3.141592653589793
let onlyValuePI: typeof PI
onlyValuePI = 3.141592653589793
console.log(onlyValuePI)
