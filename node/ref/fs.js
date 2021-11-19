const fs =require('fs');
const path=require('path');
//create folder 
// fs.mkdir(path.join(__dirname, './test'),{}, err=>{
//     if(err) throw err;
//     console.log('folder created');
// })
//create and write to file
// fs.writeFile(
//     path.join(__dirname, './test/hello.txt'),'hello world', 
//     err=>{ 
//     if(err) throw err;
//     console.log('file written');
// })

//append to file
// fs.appendFile(
//     path.join(__dirname, './test/hello.txt'),'hello Tester', 
//     err=>{ 
//     if(err) throw err;
//     console.log('file Append');
// })
//rename file
fs.rename(path.join(__dirname, './test/hello.txt'),
    path.join(__dirname, './test/hello1.txt'),err=>{
        if(err) throw err;
        console.log('file renamed');
})
    

//read from file
fs.readFile(path.join(__dirname, './test/hello1.txt'),'utf-8', (err,data)=>{ 
    if(err) throw err;
    console.log(data);
})