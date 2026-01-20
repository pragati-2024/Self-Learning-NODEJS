const fs = require('fs')
const {Transform}= require('stream')
const upper = new Transform({
    transform(chunk,encoding,cb){
        const modifiedData = chunk.toString().toUpperCase();
        // this.push(modifiedData);
        // cb();
        cb(null,modifiedData);
    }
})
const readStream = fs.createReadStream("../text/Panda.txt")
const writeStream = fs.createWriteStream("../text/jpmorgan.txt")
readStream.pipe(upper).pipe(writeStream)