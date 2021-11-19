const url=require('url');

const myUrl= new URL('https://wwww.google.com/index.html?site=facebook&username=tester');
console.log(myUrl.searchParams);
//searamParams is an object
console.log(myUrl.searchParams.get('username'));