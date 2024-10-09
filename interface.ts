interface Config
{
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  log: ( role: string ) => void,
  country?: string               //* optional
}

interface Role
{
  role: 'admin'
}

interface Config extends Role { }

const cofiguration: Config = {
  protocol: 'https',
  port: 3001,
  role: 'admin',
  log: (role: string): void => console.log(role)
}

function configToString ( { protocol, port, role, log }: Config ): string
{
  log(role)
  return `Protocol: ${protocol}, Port: ${port}, Role: ${role}`
}

console.log(configToString(cofiguration));

// Styles

interface Styles
{
  [key: string]: string
}

const styles: Styles = {
  position: 'absolute',
  top: '40px',
  left: '70px'
}

// extending the same interface

interface Some
{
  some: string
}

interface Some
{
  other: number
}

const someData: Some = {
  some: 'some',
  other: 3000
}

//* optional

interface Other
{
  name: string,
  surname?: string,
  method?: () => void,
}

const other: Other = {
  name: 'Boris',
  method: function () {console.log(this.name)},
}
if ( other.method ) other.method()
//* Non-Null Non-Undefined operator
other!.method!() //* your rules

let value: number
nonNullNonUndefined()
console.log(value! + 100); //* you take problems yourself

function nonNullNonUndefined ()
{
  value = 100
}