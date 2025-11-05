const url = require('url');

const address = 'https://google.com?/search?q=chatgpt.com';
const parsedUrl = url.parse(address,true);

console.log('Host:',parsedUrl.host);
console.log('Pathname:',parsedUrl.pathname);
console.log('Query Parameters:',parsedUrl.query);