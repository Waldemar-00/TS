interface Square {
  a: number,
  area: number
}

interface Rect
{
  a: number,
  b: number,
  area: number
}
function calcArea ( a: number ): Square //* function overload
function calcArea(a: number, b: number): Rect //* function overload
function calcArea ( a: number, b?: number ): Square | Rect
{
  if ( b )
  {
    const rect: Rect = {
      a,
      b,
      area: a * b
    }
    return rect
  } else
  {
    const square: Square = {
      a,
      area: a * a
    }
    return square
  }
}
console.log(calcArea(4))
console.log(calcArea(4, 7))