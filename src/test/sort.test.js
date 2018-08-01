import { compareData } from '../frontend/sort'

describe('<Sort />', () => {
  let arr
  beforeEach(() => {
    arr = [{
      name: 'mark',
      age: 20
    }, {
      name: 'danddie',
      age: 19
    }]
  })
  it('sorts the array by name', () => {
    compareData(arr, 'name')
    expect(arr[0].name).toBe('danddie')
  })
})
