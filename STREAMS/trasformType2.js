const fs = require('fs')
const {Transform} = require('stream')
const upper = new Transform({
    transform(chunk,encoding,cb){
        const modifiedData = chunk.toString().toUpperCase();
        cb(null,modifiedData)
    }
});
const createvowel = new Transform({
    transform(chunk,encoding,cb){
        const mData = chunk.toString().replace(/[AEIOUaeiou]/g,"*");
        cb(null,mData);
    }
})
const readStream=fs.createReadStream("../text/jpmorgan.txt")
const writeStream=fs.createWriteStream("../text/newfile.txt")
readStream.pipe(createvowel).pipe(upper).pipe(writeStream)
