function createAnimation (
  id: | string
      | number,
  name: string,
  duration: number,
  delay: number,
  easing:
    | 'ease'
    | 'ease-in'
    | 'ease-out',
  iterations:
    | number
    | 'infinite' ): void
{
 console.log(`Animation ${name} has: id ${id},  duration ${duration}, delay ${delay}, easing '${easing}', iterations ${iterations}`);
}
createAnimation('somestring', 'Reactive', 700, 200, 'ease-in', 1 )

type Easing = | 'ease' | 'ease-in' | 'ease-out'
type Iterations = number | 'infinite'
type ID = number | string

function createAnimation_1 (
  id: ID,
  name: string,
  duration: number,
  delay: number,
  easing: Easing,
  iterations: Iterations ) : void
{
 console.log(`Animation ${name} has: id ${id}  duration ${duration}, delay ${delay}, easing '${easing}', iterations ${iterations}`);
}
createAnimation_1( crypto.randomUUID(), 'Reactive', 700, 200, 'ease-in', 1 )
