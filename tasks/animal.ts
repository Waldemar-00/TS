// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }

// Response #1

interface AvailableOptions {
    status: 'available',
    data: {
        animal: 'cat' | 'dog' | 'bird',
        breed: string,
        sterilized?: string,
        location: string,
        age?: number
    }
}

// Response #2

interface NoOptions{
    status: 'not available',
    data: {
        message: string,
        nextUpdateIn: Date
    }
}

const responseAvailable: AvailableOptions = {
  status: 'available',
  data: {
    animal: 'cat',
    breed: 'yes',
    location: 'Boston',
    sterilized: 'no',
    age: 2
  }
}
const responseNoOptions: NoOptions = {
  status: 'not available',
  data: {
    message: 'No such animal',
    nextUpdateIn: new Date((new Date().getTime() + 86400 * 1000))
  }
}
function checkAnimalData ( data: AvailableOptions | NoOptions)
{
	if (data.status === 'available') {
		return data.data;
	} else {
		return `${data.data.message}, you can try in ${data.data.nextUpdateIn}`;
	}
}
console.log(checkAnimalData(responseAvailable))
console.log(checkAnimalData(responseNoOptions))