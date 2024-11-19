//! PRIVATE
class Public
{
	constructor(public name: string, public number: number){}
}
const public00 = new Public( 'name', 100 )
console.log( public00.name )
console.log( public00.number )

class Player
{
  constructor (
    private _login: string,
    private _password: string,
    public server: string,
    protected consent: boolean
  ) { }
  get getPassword (): {_login: string, _password: string}
  {
    return { _password: this._password, _login: this._login }
  }
  set getPassword ( newPassword: string )
  {
    this._password = newPassword
  }
}

const plaeyrData = new Player( 'Brown', '18763pq', '5000', true )
console.log( plaeyrData.getPassword, '1' )
console.log( plaeyrData.getPassword = '000000000', 'middle' )
console.log( plaeyrData.getPassword, '2' )

//! PROTECTED

class CompetitivePlayer extends Player
{
  constructor ()
  {
    super( 'Brown', '18763pq', '5000', true )
  }
  isConsent ()
  {
    return this.consent
  }
}
const competitive = new CompetitivePlayer()
console.log( competitive.isConsent() )

let getDPrivateField;

class D {
  #privateField: string;
  constructor(v: string) {
    this.#privateField = v;
  }
  static {
    getDPrivateField = (D: D) => D.#privateField;
  }
  get getPrivateValue ()
  {
    return this.#privateField
  }
}
const DD = new D('our private string')
console.log( getDPrivateField( new D( "privateD" ) ) ) //* ahead from class
console.log(DD.getPrivateValue) //* from instance

//! STATIC
function getNameFromServer (): string
{
  //* some code to get name of game
  const result = 'Some game'
  return result
}
class CommonPlayer
{
  static #nameOfGame: string
  private constructor () { }
  static {
    console.log( `The THIS is equal to the CommonPlayer: ${ CommonPlayer === this }` )
      //! (this.#nameOfGame = nameOfGame) ===
      //! ( CommonPlayer.#nameOfGame = nameOfGame )
    CommonPlayer.#nameOfGame = getNameFromServer()
  }
  get getGameName ()
  {
    return CommonPlayer.#nameOfGame
  }
  set getGameName (name)
  {
    CommonPlayer.#nameOfGame = name
  }
}
console.log( CommonPlayer.prototype.getGameName )
console.log( CommonPlayer.prototype.getGameName = 'BLITZ' )


//! Bind and this

class ExampleThis
{
  ourValue = 'Some value'
  printValue (this: ExampleThis)
    {
      console.log(this.ourValue)
    }
  arrowFn = () =>
    {
      console.log(this.ourValue, 'Arrow function')
    }
  this ()
    {
        return this
    }
  //! Why we do that???
  typeGuard (): this is ExampleThis2
    {
      return this instanceof ExampleThis2
  }
  //! Why we do that???
}
const textExampl = new ExampleThis()
//* textExampl.printValue()
const otherFn = textExampl.printValue.bind( textExampl )
//* otherFn()
const otherFn2 = textExampl.this().arrowFn
//* otherFn2()

class ExampleThis2 extends ExampleThis
{
  printAnotherPrint ()
    {
      super.printValue()
      this.arrowFn()
      this.this().arrowFn()
    }
}
const exampleThisTest2 = new ExampleThis2()
//* exampleThisTest2.printAnotherPrint()

//! Why we do that???
const typeGuard: ExampleThis | ExampleThis2 = new ExampleThis2()
//* typeGuard.typeGuard() ? console.log(typeGuard) : console.log(typeGuard)
if ( typeGuard.typeGuard() )
{
  console.log('TRUTH')
  typeGuard.printAnotherPrint()
}
if ( !typeGuard.typeGuard() )
{
  console.log("ELSE")
  typeGuard.printValue()
}