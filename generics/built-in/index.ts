const arrayOfNumbers: Array<number> = [ 1, 2, 3, 4, 5] //* There is inside
const arrayOfNumbers1: number[] = [ 1, 2, 3, 4, 5 ] //* it's wrapper

//* Built-in GENERICS

const readOnlyArray: ReadonlyArray<number> = [ 1, 2, 3, 4, 5 ]
//! You not may:
//* readOnlyArray[0] = 100
//* readOnlyArray.push(1200) 'push' does not exist on type readonly


interface IState
{
  some: boolean
  data: {
    some: string
  },
  name: string
}

function actionOfData (data: Readonly<IState>): IState
{
  //! data.data = 'string' IMMUTAIBLE with Readonly
  data.data.some = 'some' //? The 'Readonly' works superficially
  //! data.some = false IMMUTAIBLE with Readonly
  console.log(data.data)

  return data
}

//* Partial

const partial: IState = { //* All properties are required
  some: false,
  data: {
    some: 'str'
  },
  name: 'Julia'
}
const partialP: Partial<IState> = { //* All properties are NOT required
  some: false,
  name: 'Julia'
}

interface IPartial
{
  some?: boolean
  data?: {
    some?: string
  },
  name?: string
}
//* Required

const required: Required<IPartial> = { //* All properties are required
  some: true,
  data: {
    //* But here properties are not required
    //* (property) data: {
    //*some?: string;
    //*}
  },
  name: "Julia"
}