function userForm(req,res){
    res.write(`<form action="/submit" method="POST">
        <h1>Web Page</h1>
        <input type="text" name="text" placeholder="Enter Text">
        <input type="password" name="password" placeholder="Enter password">
        <button type="submit">Submit</button>
    </form>`)
}
module.exports=userForm