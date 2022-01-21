const add = (a, b) => {
  return a + b;
}
console.log(add(5, 6));

//const jsdom = require("jsdom");
//const { JSDOM } = jsdom;

//const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
//console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

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

module.exports = add;