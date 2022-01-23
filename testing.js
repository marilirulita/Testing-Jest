const jsdom = require("jsdom");
const { JSDOM } = jsdom;

// este requiere cierta sintaxis
const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
console.log(dom.window.document.querySelector("p").textContent); // "Hello world"

const span = new JSDOM(`<ul id="content"><li><span id="newId">List Item</span></li></ul>`);
const info = span.window.document.querySelector('span').parentNode;

console.log(info);

const dom2 = new JSDOM(`<body>
  <script>document.body.appendChild(document.createElement("hr"));</script>
</body>`, { runScripts: "dangerously" });

// The script will be executed and modify the DOM:
console.log(dom2.window.document.body.children.length === 2);

//require('jsdom-global')()
// este utiliza codigo normal de DOM manipulation in JS.
// const str = document.body.innerHTML = 'hello';
// console.log(str);
