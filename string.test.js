const stringLength = require('./string-length');

const username = "marili";
const longUser = "marilirulita";
const relative = "dad";

test('string lenght iqual 12', () => {
  expect(stringLength(username)).toBe(6);
});

test('string lenght iqual 3', () => {
  expect(stringLength(relative)).toBe(3);
});