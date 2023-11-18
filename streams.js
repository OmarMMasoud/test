const fs = require('fs');

const readStream = fs.createReadStream('./doc/text.txt',{encoding: 'utf8'});
const writeStream = fs.createWriteStream('./doc/blog.txt');

// readStream.on('data', (chunk)=>{
//     console.log('------------ new chunk --------------------');
//     console.log(chunk);

//     writeStream.write('\n New chunk \n');
//     writeStream.write(chunk);
// }); 

//piping

readStream.pipe(writeStream);