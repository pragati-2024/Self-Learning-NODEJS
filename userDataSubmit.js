const queryString = require('querystring')
function userDataSubmit(req, res) {
    let dataBody=[]
    req.on("data",(chunk)=>{
        dataBody.push(chunk)
    })
    req.on('data',()=>{
        let rawData = Buffer.concat(dataBody).toString()
        let readableData = queryString.parse(rawData)
        // console.log(readableData)
        let dataString = "My name is "+readableData.text+"and my Password is "+ readableData.password
        console.log(dataString)
    })
  res.write(`<h1>you can get information from userform</h1>`);
}
module.exports = userDataSubmit;
