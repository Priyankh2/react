const path = require('path');
const fs = require('fs');
// console.log(path);

// console.log(path.dirname('C:\\Users\\ACER\\Desktop\\Priyank\\WT\\Practical\\react\\Node'));
// console.log(path.basename('Practical\\react\\Node\\index.js'));
console.log(fs.writeFileSync('./fsModule.txt',"from priyank"))
console.log(fs.appendFile('./fsModule.txt','japat',(err)=>{
    if(err){
        throw err;
    }
    console.log("appanded");
}))
console.log(fs.readFileSync('./fsModule.txt').toString())
