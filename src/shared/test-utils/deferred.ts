import { flushAllPromises } from './flush-all-promises'

export class Deferred<T extends unknown> {
  promise: Promise<T>
  args: any[] = []

  constructor() {
    this.promise = new Promise((...args) => (this.args = args))
  }

  resolve(value: T) {
    this.args[0](value)

    return flushAllPromises()
  }

  reject(error: any) {
    this.args[1](error)

    return flushAllPromises()
  }
}
