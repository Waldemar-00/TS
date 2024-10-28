class User100<NorS>
{
  name: string;
  age: NorS;
  constructor ( name: string, age: NorS )
  {
    this.name = name;
    this.age = age;
  }
  getFullName(surname?: string): string
  {
    if ( surname ) return `${ this.name } ${ surname }`
    else return `${ this.name }`
  }
}
const john = new User100( 'John', 'twy' ) //* any
console.log(john)
const julia = new User100<number>( 'Julia', 27 )
console.log(julia)
console.log( julia.getFullName( 'Brown' ) )
console.log(julia.getFullName())

class AdminUser<R> extends User100<number | string>
{
  rules: R;
  constructor ( rules: R, name: string, age: number )
  {
    super(name, age);
    this.rules = rules;
  }
  getAdmin() { return this.rules}
}
const admin = new AdminUser<boolean>(true, 'John', 23)
console.log( admin.getFullName( 'Brown' ) )
console.log(admin.getAdmin())