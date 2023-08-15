const http = require("http");
const data = require("./data"); // Make sure the path to data.js is correct

const handleHomeRequest = (resp) => {
    resp.end("Hello from the home side.");
};

const handleAboutRequest = (resp) => {
    resp.end("Hello from the ABOUT side");
};

const handleContactUsRequest = (resp) => {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.end(JSON.stringify({ contact: "03037472701" }));
};

const handleUserDataRequest = (resp) => {
    resp.writeHead(200, { "Content-Type": "application/json" });
    resp.end(JSON.stringify(data)); // Use the data from the data module
};

const handleNotFound = (resp) => {
    resp.writeHead(404, { "Content-Type": "text/plain" });
    resp.end("404 - Not Found");
};

http.createServer((req, resp) => {
    if (req.url === "/") {
        handleHomeRequest(resp);
    } else if (req.url === "/about") {
        handleAboutRequest(resp);
    } else if (req.url === "/contactus") {
        handleContactUsRequest(resp);
    } else if (req.url === "/userdata") {
        handleUserDataRequest(resp);
    } else {
        handleNotFound(resp);
    }
}).listen(4000, () => {
    console.log("Server is running on port 4000");
});
