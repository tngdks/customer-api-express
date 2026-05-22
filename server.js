const http = require("http");

const customers = [
    { id: 1, name: "Devendra", email: "devendra@gmail.com"},
    { id: 2, name: "Neha", email: "neha@gmail.com"},
];

const server = http.createServer((req, res) => {
    if (req.url =="/") {
        res.end("Home Page");
    } else if (req.url === "/about") {
        res.end("About Page");
    } else if ( req.url === "/customers") {
        res.writeHead(200, { "Content-Type": "application/json"});
        res.end(JSON.stringify(customers));
    } else {
        res.end("Page Not Found");
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});