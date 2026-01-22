// path module is built in core module that provide utilities for working with file and directory paths
// global constant is a value that is always available in your code without requiring an import or declaration

const path = require('path');
const file ="./text/reshu.txt"
console.log(path.extname(file));

// const myURL = new URL(req.url,`https://${req.headers.host}`)
// const mypath = myURL.pathname;
// const log = `${req.method} ${path} ${new Date().toISOString()}\n`

// const myurl = new URL(req.url,`http://${req.headers.host}`)
// const path = myurl.pathname;
// const log = `${req.method} ${req.path} ${new Date().toISOString()}\n`