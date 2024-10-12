function handleData ( data: unknown ): void
{
  if ( typeof data === 'string' )
  {
    console.log(data.toLocaleUpperCase());
  }
  if ( data instanceof Object && data !== null && !Array.isArray(data) )
  {
    Object.keys( data ).forEach( ( key ) => console.log((data as { [key: string]: any })[key]))
  }
  if ( Array.isArray( data ) )
  {
    console.log(data);

  }
}

// handleData( 'Hello, I am a string from the server!' )
// handleData( { msg: 'Hello', port: 3000, protocol: 'https' } )
// handleData( [ 'a', 'b', 'c', 'd', 'e', 'f' ] )

const json = '[{"userId": 1,"id": 1,"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit","body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"}]'

function safeParse ( data: string ): unknown
{
  return JSON.parse( data )
}
//* console.log((safeParse(json) as any)[0].id);
//? or
//* const user: any = safeParse(json)
//* console.log(user[0].id);
const user = safeParse(json)
//* handleData( user )

//! try-catch

try {
  if ( true ) throw 'Some Error'
  //* new Error('New Error object')
} catch ( error )
{
  if ( error instanceof Error ) console.log(error.message);
  else console.log(error);
}

//* Intersection and Union with Unknown

type TU0 = any | unknown
type TU1 = number | unknown

type TI0 = any & unknown
type TI1 = number & unknown