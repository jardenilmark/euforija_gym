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
  it('gets arr[0]', () => {
    expect(arr[0].name).toBe('mark')
  })
  it('sorts the array by name', () => {
    compareData(arr, 'name')
    expect(arr[0].name).toBe('danddie')
  })
})
