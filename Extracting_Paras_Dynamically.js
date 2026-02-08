//parseQuery.js
const { URL, URLSearchParams } = require('url');

//Example URL with query string
const exampleUrl= 
'http://example.com/page?name=JohnDoe&age=25&city=NewYork';

//Parse the URL
const parsedUrl = new URL(exampleUrl);

//Get the query string
const queryString = parsedUrl.search;

//Parse the query string into readable parts
const params = new URLSearchParams(queryString);
//Display the query parameters
console.log('Query Parameters:');
for (const [key,value] of params) {
    console.log(`${key}: ${value}`);
}

//Access specific parameters
console.log('/nSpecific Parameters:');
console.log('Name:', params.get('name'));
console.log('Age:', params.get('age'));
console.log('City:', params.get('city'));