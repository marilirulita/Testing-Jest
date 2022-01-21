// import getTodos from '../getTodos.js';
import stringLength from '../string-length';
// import reverseString from '../reverse-string';
// import Calculator from '../calculator';
// import capitalize from '../string-capitalize';


// /**
//  * @jest-environment jsdom
//  */

// //  jest.mock('../__mocks__/localstorage');
// //  jest.mock('../__mocks__/list');

// // test('use jsdom in this test file', () => {
// //   const element = document.createElement('div');
// //   expect(element).not.toBeNull();
// // });
// // test('Test Empty Localstorage', () => {
// //   document.body.innerHTML = '<ul class="todoList"></ul>';
// //   getTodos();
// //   const local = localStorage.getItem('todos');
// //   expect(local).toBe(null);
// // });

// // test('Test Empty DOM', () => {
// //   document.body.innerHTML = '<ul class="todoList"></ul>';
// //   getTodos();
// //   expect(document.body.querySelectorAll('li').length).toBe(0);
// // });


// // test('Add one new item to the list', () => {
// //     document.body.innerHTML =
// //     '<div>' +
// //     '  <ul id="list"></ul>' +
// //     '</div>';
// //     addItem();
// //     const list = document.querySelectorAll('#list li');
// //     expect(list).toHaveLength(1);
// // });

const username = "marili";
const longUser = "marilirulita";
const relative = "dad";

//test for string lenght

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

// // test for reverse string

// test('string is reversed', () => {
//   expect(reverseString(longUser)).toMatch(/atiluriliram/);
// });

// test('string is reversed', () => {
//   expect(reverseString(username)).toMatch(/iliram/);
// });

// // tests for calculator

// const testOne = new Calculator(6, 3);
// const testTwo = new Calculator(10, 6);

// describe('Calculator add', () => {

//   test('6 + 3 is equal to 9', () => {
//     expect(testOne.add()).toBe(9);
//   });

//   test('6 + 3 is less than 20', () => {
//     expect(testOne.add()).toBeLessThan(20);
//   });

//   test('10 + 6 is biguer than 10', () => {
//     expect(testTwo.add()).toBeGreaterThan(10);
//   });
// });

// describe('Calculator substract', () => {

//   test('6 - 3 is not 2', () => {
//     expect(testOne.substract()).not.toBe(2);
//   });

//   test('10 - 6 is equal 4', () => {
//     expect(testTwo.substract()).toBe(4);
//   });

//   test('10 - 6 is less than 5', () => {
//     expect(testTwo.substract()).toBeLessThan(5);
//   });
// });

// describe('Calculator divide', () => {

//   test('6 / 3 is equal to 2', () => {
//     expect(testOne.divide()).toBe(2);
//   });

//   test('10 / 6 is biguer than 1', () => {
//     expect(testTwo.divide()).toBeGreaterThan(1);
//   });

//   test('10 / 6 is less than 3', () => {
//     expect(testTwo.divide()).toBeLessThan(3);
//   });
// });

// describe('Calculator multiply', () => {

//   test('6 * 3 is equal to 18', () => {
//     expect(testOne.multiply()).toBe(18);
//   });

//   test('6 * 3 is less than 20', () => {
//     expect(testOne.multiply()).toBeLessThan(20);
//   });

//   test('10 * 6 is equal 60', () => {
//     expect(testTwo.multiply()).toBe(60);
//   });
// });

// // tests for capitalize function

// const nameOne = "mary";
// const nameTwo = "rose";

// describe('capitalize', () => {

//   test('capitalize mary to Mary', () => {
//     expect(capitalize(nameOne)).toMatch(/Mary/);
//   });

//   test('capitalize mary not to be mary', () => {
//     expect(capitalize(nameOne)).not.toMatch(/mary/);
//   });

//   test('capitalize rose to Rose', () => {
//     expect(capitalize(nameTwo)).toMatch(/Rose/);
//   });

//   test('capitalize rose not to be rose', () => {
//     expect(capitalize(nameTwo)).not.toMatch(/rose/);
//   });
// });




// import { addItem } from './src/display.js';

// test('add new item to list', () => {
//   let list = [];
//   const input = 'New Task';
//   // document.body.innerHTML =
//   //   '<input type="text" id="input">';
//   // const input = document.getElementById('input');
//   // input.value = 'New task';
//   addItem(input, list);
//   expect(list).toHaveLength(1);
// });
