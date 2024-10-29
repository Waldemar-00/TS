interface Types {
  name: string,
  age: number,
  stuffs: string[],
}
type KeysTypesOfTypes = Types[keyof Types]
type Stuffs = Types[ 'stuffs' ]
type InputNumber = Types[ 'name' | 'age' ]


const users = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
]
type Person = typeof users[ number ]

const user_001 =  { name: "Alice", age: 15 }

type RersonFromObj = keyof typeof user_001

const alice = 'name'

type AliceType = typeof users[ number ][ typeof alice ]

//* let bob: 'name' = 'name'
//* or
let bob = 'name' as 'name'
type BobType = typeof users[ number ][ typeof bob ]