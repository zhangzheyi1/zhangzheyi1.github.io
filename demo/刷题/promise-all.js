// Promise.all() 方法接收一个promise的iterable类型（注：Array，Map，Set都属于ES6的iterable类型）的输入，
// 并且只返回一个Promise实例， 那个输入的所有promise的resolve回调的结果是一个数组。
// 这个Promise的resolve回调执行是在所有输入的promise的resolve回调都结束，或者输入的iterable里没有promise了的时候。
// 它的reject回调执行是，只要任何一个输入的promise的reject回调执行或者输入不合法的promise就会立即抛出错误，并且reject的是第一个抛出的错误信息。

// 上面是MDN上关于Promise.all的描述，咋一看有点懵逼，我们一起总结一下关键点

// Promise.all接收一个数组，数组里面可以是Promise实例也可以不是
// Promise.all 等待所有都完成（或第一个失败）
// Promise.all执行的结果也是一个Promise

Promise.myAll = (promises) => {
  // 符合条件3，返回一个promise
  return new Promise((rs, rj) => {
    let count = 0;
    let result = [];
    const len = promises.length;

    promises.forEach((p, i) => {
      // 符合条件1， 将数组里的项通过Promise.resolve进行包装
      Promise.resolve(p).then((res) => {
        count += 1;
        result[i] = res;
        // 符合条件2，等待所有都完成
        if (count === len) {
          rs[result];
        }
        // 符合条件2，只要一个失败所有都失败
      }).catch(rj);
    });
  })
};

let p1 = Promise.resolve(1)
let p2 = 2
let p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 3)
})

let p4 = Promise.reject('出错啦')

Promise.myAll([p1, p2, p3]).then((res) => {
  console.log(res); // [ 1, 2, 3 ]
});


Promise.myAll([p1, p2, 3]).then((res) => {
  console.log(res) // [ 1, 2, 3 ]
}).catch((err) => {
  console.log('err', err)
})


Promise.myAll([p1, p2, p4]).then((res) => {
  console.log(res)
}).catch((err) => {
  console.log('err', err) // err 出错啦
})


// 对于 all 方法而言，需要完成下面的核心功能:

// 传入参数为一个空的可迭代对象，则直接进行resolve。
// 如果参数中有一个promise失败，那么Promise.all返回的promise对象失败。
// 在任何情况下，Promise.all 返回的 promise 的完成状态的结果都是一个数组
Promise.all = function(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let index = 0;
    let len = promises.length;
    if(len === 0) {
      resolve(result);
      return;
    }
   
    for(let i = 0; i < len; i++) {
      // 为什么不直接 promise[i].then, 因为promise[i]可能不是一个promise
      Promise.resolve(promise[i]).then(data => {
        result[i] = data;
        index++;
        if(index === len) resolve(result);
      }).catch(err => {
        reject(err);
      })
    }
  })
}

promise.all = function(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let index = 0;
    let length = promises.length;
    if (length === 0) {
      resolve(result);
      return;
    }
    for (let i = 0; i < length; i++) {
      Promise.resolve(promise[i]).then(data => {
        result[i] = data;
        index++;
        if (index === length) resolve(result);
      }).catch(err => {
        reject(err);
      })
      
    }
  })
}