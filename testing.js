const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const { window } = new JSDOM(``, { runScripts: "outside-only" });

window.eval(`document.body.innerHTML = "<p>Hello, world!</p>";`);
window.document.body.children.length === 1;

const add = (a, b) => {
  return a + b;
}
console.log(add(5, 6));
//console.log(jsdom);

// const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
  // const element = document.createElement('div');
  // expect(element).not.toBeNull();


// const dom = new JSDOM(`<body>
//   <script>document.body.appendChild(document.createElement("hr"));</script>
// </body>`, { runScripts: "dangerously" });

// // The script will be executed and modify the DOM:
// dom.window.document.body.children.length === 2;