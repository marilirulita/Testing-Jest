/**
 * @jest-environment jsdom
 */

import addItem from "../addFunc.js";

test('Check DOM information', () => {
  document.body.innerHTML = `
    <div class="flex"><p>Hello World</p></div>`;

  const answer = document.querySelector('p').textContent;

  expect(answer).toBe('Hello World');
});

test('add new item to list', () => {
  let list = [];

  document.body.innerHTML = `<input type="text" id="input">`;
  const input = document.getElementById('input');
  input.value = 'New task';

  addItem(input, list);

  expect(list).toHaveLength(1);
  expect(list[0].description).toBe('New task');
});

// it('check if the correct color is set for the acitve list item', () => {
//   let props = {id:'123'}
//   const listItem = activeListItem(props);
//   expect(listItem.style.backgroundColor).toBe('#ededed');
// });

// let spy;
// beforeAll(() => {
//   spy = jest.spyOn(document, 'getElementById');
// });

// describe('activeListItem', () => {
//   describe('with found element', () => {
//     let mockElement;
//     beforeAll(() => {
//       // here you create the element that the document.createElement will return
//       // it might be even without an id
//       mockElement = document.createElement('h4');
//       mockElement.id = '123';
//       activeListItem(mockElement);
//       spy.mockReturnValue(mockElement);
//     });

//     // and then you could expect it to have the background
//     it('should have the background applied', () => {
//       expect(mockElement.style.backgroundColor).toBe('red');
//     });
//   });

  // describe('without found element', () => {
  //   // and here you can create a scenario
  //   // when document.createElement returns null
  //   beforeAll(() => {
  //     spy.mockReturnValue(null);
  //   });

  //   // and expect you function not to throw an error
  //   it('should not throw an error', () => {
  //     expect(() => activeListItem({id:'123'})).not.toThrow();
  //   });
  // });
//});
