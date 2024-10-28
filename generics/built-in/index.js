var arrayOfNumbers = [1, 2, 3, 4, 5]; //* There is inside
var arrayOfNumbers1 = [1, 2, 3, 4, 5]; //* it's wrapper
//* Built-in GENERICS
var readOnlyArray = [1, 2, 3, 4, 5];
function actionOfData(data) {
    //! data.data = 'string' IMMUTAIBLE with Readonly
    data.data.some = 'some'; //? The 'Readonly' works superficially
    //! data.some = false IMMUTAIBLE with Readonly
    console.log(data.data);
    return data;
}
