function handleData(data) {
    if (typeof data === 'string') {
        console.log(data.toLocaleUpperCase());
    }
    if (data instanceof Object && data !== null && !Array.isArray(data)) {
        Object.keys(data).forEach(function (key) { return console.log(data[key]); });
    }
    if (Array.isArray(data)) {
        console.log(data);
    }
}
handleData('Hello, I am a string from the server!');
handleData({ msg: 'Hello', port: 3000, protocol: 'https' });
handleData(['a', 'b', 'c', 'd', 'e', 'f']);
