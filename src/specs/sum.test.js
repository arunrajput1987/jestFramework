import sum from '../app/sum'

test('Sum of two numbers(5 & 10) would be equal to 15', () => {
  expect(sum(5, 10)).toBe(15);
})
