import formatList from '../app/list-data'

test('Verify list of input data', () => {
  const formattedList = formatList(
    'Star Wars Names',
    [
      {name: 'Arun'},
      {name: 'Seema'},
      {name: 'Anshu'},
      {name: 'Aryendra1'},
    ],
    'name'
  )
  expect(formattedList).toMatchSnapshot();
})
