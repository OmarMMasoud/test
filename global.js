setTimeout(()=> {
    console.log('hello pc , u can stop now');
    clearInterval(int);
}, 3000);

const int= setInterval(()=>
{console.log('i am sexy and i know it')
}, 1000);


console.log(__dirname);
console.log(__filename);
console.log