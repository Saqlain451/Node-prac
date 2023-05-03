// ! create a own server
const http = require("http");

//!  creating server

// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url == "/") {
//     res.end("Response from Home page");
//   } else if (req.url == "/about") {
//     res.end("Hello from about page");
//   } else if (req.url == "/contact") {
//     res.end("You can contact me in whatapp");
//   } else {
//     res.writeHead(404,{"Content-type" : "text/html"});
//     res.end("<h1>Page not found</h1>");
//   }
// });

// // ! checking request

// server.listen(3000, "127.0.0.1", () => {
//   console.log("listining from port no 3000 http://localhost:3000/");
// });




