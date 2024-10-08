interface Config
{
  protocol: 'http' | 'https',
  port: 3000 | 3001,
  log: (role: string) => void
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