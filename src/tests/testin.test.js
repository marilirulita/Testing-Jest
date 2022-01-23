const jsdom = require("jsdom");
const { JSDOM } = jsdom;

test('Check DOM information', () => {
  const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
  const answer = (dom.window.document.querySelector("p").textContent); // "Hello world"

  expect(answer).toBe('Hello world');
});
