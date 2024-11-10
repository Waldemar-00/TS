const jsonObject = '{"userId": 10, "id": 97,"title": "quas fugiat ut perspiciatis vero provident","body": "eum non blanditiis soluta porro quibusdam voluptas vel voluptatem qui placeat dolores qui velit aut vel inventore aut cumque culpa explicabo aliquid at perspiciatis est et voluptatem dignissimos dolor itaque sit nam"}'

const objectFromJson: any = JSON.parse( jsonObject )
//! use nerrowing
if ( "userId" in objectFromJson && "id" in objectFromJson )
{
  const h1: HTMLHeadingElement | null = document.querySelector( 'h1' )
  if ( h1 )
  {
    h1.textContent = 'We got the file that needed for us!'
    document.body.append(h1)
  }

  console.log('We got the file that needed for us!')
}

//*____________________________________________________

const _URL: string = 'https://jsonplaceholder.typicode.com/todos'
let todoList: ToDo[] = []
interface ToDo
{
  "userId": number,
  "id": number,
  "title": string,
  "completed": boolean
}

fetch( _URL ).then( ( response ) => response.json() ).then( ( todo ) =>
{
  if ( "id" in todo ) todoList.push( todo )
  else if ( Array.isArray( todo ) ) todoList = todo
  else console.log(`${todo} - is a string`);
  console.log(todo)
} )

const promise_1 = new Promise<string>( ( resolve, reject ) =>
{
  resolve('TEST')
} )

promise_1.then( message => console.log( message ) )

//! AWAITED

type WhatFromPromise = Awaited<Promise<Promise<number>>>

interface User001 {
  name: string,
  age: number
}
async function getUser (): Promise<User001[]>
{
  const user: User001[] = [ { name: 'John', age: 77 } ]
  return user
}

const ourUser = getUser()
//? How can you get type 'User001[]' from function getUser???
//! You can use Awaited

//* type TypeFromFnGetUser = Awaited<Promise<User001[]>> - User001[]
type TypeFromFnGetUser = Awaited<Promise<ReturnType<typeof getUser>>> //* User001[]

//! With infer

type GetTypeFromPromise<T> = T extends Promise<infer Return> ? Return : T

type OurFnType = GetTypeFromPromise<ReturnType<typeof getUser>>