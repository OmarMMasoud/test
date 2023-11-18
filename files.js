const fs = require('fs');


// read-----------------------------------------

// const fs = require('fs');
// fs.readFile('./doc/text 1.txt', (err, data)=>{
// if(err){
//     console.log('error');
// }
// console.log(data.toString());
// });


//write------------------------------------------

// fs.writeFlie('./doc/text.txt','file is empty', ()=>{
//     console.log('file was written');
// });

//direction-------------------------------------

// fs.mkdir('./assets', (err)=>{
//     if(err){
//     console.log('err');
//  }
//  console.log('done');
//      });

if (fs.existsSync('./doc/deletfile.txt')){
fs.unlink('./doc/deletfile.txt', (err)=>{
    if(err){
        console.log(err)
    }
    console.log('file deleted');
})}