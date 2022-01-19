const stringLength = require('./string-length');
const reverseString = require('./reverse-string');

const username = "marili";
const longUser = "marilirulita";
const relative = "dad";

// test for string lenght

test('string lenght iqual 12', () => {
  expect(stringLength(username)).toBe(6);
});

test('string lenght iqual 3', () => {
  expect(stringLength(relative)).toBe(3);
});

test('string lenght is allowed (biger)', () => {
  expect(stringLength(relative)).toBeGreaterThan(1);
});

test('string lenght is allowed (smaller)', () => {
  expect(stringLength(username)).toBeLessThan(10);
});

test('string length not allowed', () => {
  expect(() => stringLength(longUser)).toThrow(Error);
});

// test for reverse string

test('string is reversed', () => {
  expect(reverseString(longUser)).toMatch(/atiluriliram/);
});

test('string is reversed', () => {
  expect(reverseString(username)).toMatch(/iliram/);
});