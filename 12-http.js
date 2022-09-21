const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('Welcome to our home page')
}
if(req.url === '/about'){
    res.end('Here is our short historty')
}
if(req.url === '/contact'){
res.end(`
<h1>Oops</h1>
<p>we cant find it</p>
<a href='/'>back home</a>`)}
})

server.listen(5000)