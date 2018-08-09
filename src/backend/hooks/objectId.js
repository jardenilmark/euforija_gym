import { ObjectId } from 'mongodb'

function objectIdHook (object) {
  return (context) => {
    if (context.data[object] instanceof Array) {
      context.data[object] = context.data[object].map(obj => new ObjectId(obj))
    } else if (context.data[object] instanceof Object) {
      context.data[object] = new ObjectId(context.data[object])
    } else {
      return new Error('Object Hook Error')
    }
  }
}

export default objectIdHook
