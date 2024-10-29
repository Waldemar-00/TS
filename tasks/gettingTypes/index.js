var phones = [
    {
        company: "Nokia",
        number: 1285637,
        size: "5.5",
        companyPartner: "MobileNokia",
        manufactured: new Date("2022-09-01"),
    },
    {
        company: "Samsung",
        number: 4356637,
        size: "5.0",
        companyPartner: "SamMobile",
        manufactured: new Date("2021-11-05"),
    },
    {
        company: "Apple",
        number: 4552833,
        size: "5.7",
        companyPartner: "no data",
        manufactured: new Date("2022-05-24T12:00:00"),
    },
];
function filterPhonesByDate(phones, manufactured, initial) {
    var phArr = phones.filter( ( obj ) => new Date( obj.manufactured ).getTime() > new Date( initial ).getTime()
    )
    return phArr;
}
console.log(filterPhonesByDate(phones, "manufactured", "2022-01-01"));