"use strict";
const arrayOfNumbers = [1, 2, 3, 4, 5]; //* There is inside
const arrayOfNumbers1 = [1, 2, 3, 4, 5]; //* it's wrapper
//* Built-in GENERICS
const readOnlyArray = [1, 2, 3, 4, 5];
function actionOfData(data) {
    //! data.data = 'string' IMMUTAIBLE with Readonly
    data.data.some = 'some'; //? The 'Readonly' works superficially
    //! data.some = false IMMUTAIBLE with Readonly
    console.log(data.data);
    return data;
}
//* Partial
const partial = {
    some: false,
    data: {
        some: 'str'
    },
    name: 'Julia'
};
const partialP = {
    some: false,
    name: 'Julia'
};
//* Required
const required = {
    some: true,
    data: {
    //* But here properties are not required
    //* (property) data: {
    //*some?: string;
    //*}
    },
    name: "Julia"
};
