const http = require("http");
const fs = require("fs");
// /products -> card -> product card -> pic description title

// http://localhost:3000/about
const server = http.createServer((req, res) => {
  // const url = req.url;
  // if (url === "/") {
  //   res.write(`
  //     <p>Superman</p>
  //     <img src="https://images.unsplash.com/photo-1594344041337-0223bd103abe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1cGVybWFufGVufDB8fDB8fHww"/>
  //     `);
  //   res.end();
  // } else if (url === "/about") {
  //   res.write(`
  //     <h1  style="font-family:cursive;">Superman</h1>
  //     <p style="font-family:cursive;">Superman is a superhero who appears in American comic books published by DC Comics. The character was created by writer Jerry Siegel and artist Joe Shuster, and debuted in the comic book Action Comics #1 (cover-dated June 1938 and published April 18, 1938).[1] Superman has been adapted to several other media including radio serials, novels, films, television shows, theater, and video games.</p>
  //     <img style="width:100%;" src="https://images.unsplash.com/photo-1594344041337-0223bd103abe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHN1cGVybWFufGVufDB8fDB8fHww"/>
  //     `);
  //   res.end();
  // } else if (url === "/justice-league") {
  //   res.write(`
  //     <h1 style="font-family:cursive;">Justice League</h1>
  //     <p style="font-family:cursive;">The Justice League, or Justice League of America (JLA), is a group of superheroes appearing in American comic books published by DC Comics. The team first appeared in The Brave and the Bold #28 (March 1960). Writer Gardner Fox conceived the team as a revival of the Justice Society of America, a similar team from DC Comics from the 1940s which had been pulled out of print due to a decline in sales. The Justice League is an all-star ensemble cast of established superhero characters from DC Comics' portfolio. Diegetically, these superheroes usually operate independently but occasionally assemble as a team to tackle especially formidable villains. This is in contrast to certain other superhero teams such as the X-Men, whose characters were created specifically to be part of the team, with the team being central to their identity. The cast of the Justice League usually features a few highly popular characters who have their own solo books, such as Superman, Batman, and Wonder Woman, alongside several lesser-known characters who benefit from exposure.</p>
  //     <img style="width:100%;" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/JLA-AlexRoss.jpg/450px-JLA-AlexRoss.jpg"/>
  //     `);
  //     res.end()
  // }
  // ////////////////////////////////////////////////////////////////
  // File system
  // BANK Account -> AAXXXXXXX234 (Secret content -> secure way transfer to user )
  // fs.appendFileSync(
  //   "test.txt",
  //   `Date: ${new Date().getDate()} , UserName -> SAURABH , Time -> ${new Date().toLocaleTimeString()}\n`,
  //   "utf-8"
  // );
  // fs.appendFileSync("test.txt", "Its written by SAURABH ", "utf-8");
});
// Server sided rendering
// port -> 3000 -> 3000 address -> backend running

server.listen(3000, () => {
  console.log("SERVER IS EXECUTING");
});
