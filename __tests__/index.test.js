import binarySearch from '../src';

test('find element\'s index', () => {
  const list = [1, 2, 6, 7, 8, 9, 10];
  const list2 = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'h'];

  expect(binarySearch(list, 7)).toBe(3);
  expect(binarySearch(list2, 'e')).toBe(4);
  expect(binarySearch(list2, 'z')).toBe(null);
});
