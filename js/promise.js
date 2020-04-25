
class Promise2 {
  constructor(fn) {
    this.state = 'pending';
    this.value = '';
    this.reason = '';
    this.onFulfilledCbs = [];
    this.onRejectCbs = [];
    const resolve = value => {
      if (this.state === 'pending') {
        this.state = 'fulfilled';
        this.value = value;
        this.onFulfilledCbs.forEach(cb => {
          this.value = cb(this.value);
        })
      }   
    }
    const reject = reason => {
      if (this.state === 'pending') {
        this.state = 'rejected';
        this.reason = reason;
        this.onRejectCbs.forEach(cb => {
          this.reason = cb(this.reason);
        });
      }
    }

    try {
      fn(resolve, reject);
    } catch(e) {
      reject(e);
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
    onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason };
    const p1 = new Promise2((resolve, reject) => {
      if (this.state === 'fulfilled') {
        setTimeout(() => {
          try {
            const x = onFulfilled(this.value);
            resolvePromise(p1, x, resolve, reject);
          } catch(e) {
            reject(e);
          }
        });
      } else if (this.state === 'rejected') {
        setTimeout(() => {
          try {
            const x = onRejected(this.reason);
            resolvePromise(p1, x, resolve, reject);
          } catch(e) {
            reject(e);
          }
        });
      } else if (this.state === 'pending') {
        this.onFulfilledCbs.push(() => {
          setTimeout(() => {
            try {
              const x = onFulfilled(this.value);
              resolvePromise(p1, x, resolve, reject);
            } catch(e) {
              reject(e);
            }
          });
        });
          this.onRejectCbs.push(() => {
            setTimeout(() => {
              try {
                const x = onRejected(this.reason);
                resolvePromise(p1, x, resolve, reject);
              } catch(e) {
                reject(e);
              }
            });
        });
      }
    });
    return p1;
  }

  finally(callback) {
    return this.then((value) => {
      return Promise.resolve(callback()).then(() => {
        return value;
      })
    }, (err) => {
      return Promise.resolve(callback()).then(() => {
        throw err;
      })
    })
  }
  all(promises) {
    return new Promise((resolve, reject) => {
      const result = [];
      if (promises.length === 0)  {
        resolve([]);
      } else {
        for(let i = 0; i < promises.length; i ++) {
          Promise.resolve(promises[i]).then((data) => {
            result.push(data);
          }, err => {
            reject(err);
            return
          });
        }
        resolve(result);
      }
    });
  }
  race(promises) {
    return new Promise((resolve, reject) => {
      for(let i = 0; i < promises.length; i ++) {
        Promise.resolve(promises[i]).then(val => {
          resolve(val);
        }).catch(err => {
          reject(err);
        })
      }
    });
  }
}

const promise = new Promise2((resolve, reject) => {
  resolve('success');
  reject('error');
});

promise.then(data => {
  console.log(data);
}, error => {
  console.log(error);
}).then(data => {
  console.log(data);
}).finally(() => {
});
