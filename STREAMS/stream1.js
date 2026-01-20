// streams are a powerful mechanism for processing data in small, manageable chunks rather than loading the entire data into memory at once
const fs = require('fs')
const readStream = fs.createReadStream("../text/reshu.txt")
const writeStream = fs.createWriteStream('../text/Panda.txt')
// readStream.on("data",(chunk)=>{
//     let data = chunk.toString();
//     writeStream.write(data);
// })
// readStream.on("end",()=>{
//     writeStream.end();
// })
readStream.pipe(writeStream)
readStream.on("data",(chunk)=>{
    let data = chunk.toString().toUpperCase()
    writeStream.write(data);
})
readStream.on("end",()=>{
    writeStream.end();
})

