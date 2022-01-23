/**
 * @jest-environment jsdom
 */

test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

test('Add dom eements', () => {
  const input = document.createElement('input');
  input.value = 'New element';
  expect(input.value).toBe('New element');
})