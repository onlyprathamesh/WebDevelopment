const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Display properties</title>
      <style>
          *{
              box-sizing: border-box;
          }
          .top {
              border: 4px solid blueviolet;
              margin: auto;
              width: 1200px;
          }
  
          h3 {
              text-align: center;
              margin: auto;
          }
  
          .box {
              border: 3px solid black;
              background-color: grey;
              margin: 7px 6px;
              padding: 8px;
              display: inline-block;
              width: 32%;
          }
          .container{
              margin: auto;
              width: 1200px;
          }
      </style>
  </head>
  
  <body>
      <header class="top">
          <h3>Welcome to my blog</h3>
      </header>
      <div class="container">
          <div class="box">
              <h4>Heading</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi optio iure voluptatibus? Non perferendis
                  perspiciatis autem odit corporis repudiandae dolore natus eligendi quod reprehenderit magnam vero harum
                  aperiam, aspernatur iure alias deleniti at amet iste.</p>
          </div>
          <div class="box">
              <h4>Heading</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi optio iure voluptatibus? Non perferendis
                  perspiciatis autem odit corporis repudiandae dolore natus eligendi quod reprehenderit magnam vero harum
                  aperiam, aspernatur iure alias deleniti at amet iste.</p>
          </div>
          <div class="box">
              <h4>Heading</h4>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi optio iure voluptatibus? Non perferendis
                  perspiciatis autem odit corporis repudiandae dolore natus eligendi quod reprehenderit magnam vero harum
                  aperiam, aspernatur iure alias deleniti at amet iste.</p>
          </div>
      </div>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});