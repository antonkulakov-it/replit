class ReturnPromise {
  constructor () {
    return new Promise((res, rej) => {});
  }
}

const promise = new ReturnPromise();

console.log(promise);