// export let username="Pragati Bansal"
// module.exports = {
//     username:"pragati bansal"
// }
// learning how to export
// wht are modules(block of code to achieve specific functionality) and types?
// 3 type->core module->by default present 2. third party->extrenally installed 3.custom module->self made used for bigger project

// const fs = require ('fs');
// const os = require('os');
const{log}= require('console')


// // core modules
// console.log(os.platform());//win32
// console.log(os.hostname());//DESKTOP-7CMFKDS
// console.log(os.cpus());//details dega

// fs.writeFileSync("dummy.txt","this is dummy file");
// objects - did'nt need to import
console.log("abs");//global object
console.log(process.cwd());//global object->gives path
console.log(process.pid);//global object->gives process id


log("custom log")

