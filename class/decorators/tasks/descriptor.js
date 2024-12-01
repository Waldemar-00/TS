const object = {
  property: 'Some'
}



Object.defineProperty( object, 'time', {
  value: new Date().toTimeString(),
  enumerable: false,
  writable: false,
  configurable: false
} )
//! Object.defineProperty( object, 'time', {
//!    value: 'FUCKING TIME',
//!    enumerable: true,
//!    writable: true,
//!    configurable: true
//!  } )                        It calls error: can't redefine non-configurable property "time"
object.time = 'FUCKING TIME'
console.log( object.time )
for ( let prop of Object.keys(object) )
{
  console.log( prop )
}
console.log( object )