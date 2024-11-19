const http = require("http");

const server = http.createServer((req, res) => {
  res.write(`
    <p>Superman</p>
    <img src="https://images.unsplash.com/photo-1594344041337-0223bd103abe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1cGVybWFufGVufDB8fDB8fHww"/>
    `);
  res.end();
});
// Server sided rendering
// port -> 3000 -> 3000 address -> backend running

server.listen(3000, () => {
  console.log("SERVER IS EXECUTING");
});
