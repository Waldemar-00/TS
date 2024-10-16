// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }
var responseAvailable = {
    status: 'available',
    data: {
        animal: 'cat',
        breed: 'yes',
        location: 'Boston',
        sterilized: 'no',
        age: 2
    }
};
var responseNoOptions = {
    status: 'not available',
    data: {
        message: 'No such animal',
        nextUpdateIn: new Date((new Date().getTime() + 86400 * 1000))
    }
};
function checkAnimalData(data) {
    if (data.status === 'available') {
        return data.data;
    }
    else {
        return "".concat(data.data.message, ", you can try in ").concat(data.data.nextUpdateIn);
    }
}
console.log(checkAnimalData(responseAvailable));
console.log(checkAnimalData(responseNoOptions));
