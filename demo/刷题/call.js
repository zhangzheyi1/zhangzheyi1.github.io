// mdn call上是这样描述call的, call 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。
// 所以关键点是指定的this和一个或者多个参数, 只要了解了this的基本用法，实现起来就简单多了。

/**
 * 
 * @param {*} ctx ctx 函数执行上下文this
 * @param  {...any} args args参数列表
 * @returns 函数执行的结果
 */
Function.prototype.myCall = function (ctx, ...args) {
  // 简单处理未传ctx上下文，或者传的是null和undefined等场景
  if (!ctx) {
    ctx = typeof window !== 'undefined' ? window : global;
  }
  // 暴力处理，ctx可能传非对象
  ctx = Object(ctx);
  // 用Symbol生成唯一的key
  const fnName = Symbol();
  // 这里的this，即要调用的函数
  ctx[fnName] = this;
  // 将args展开，并且调用fnName函数，此时fnName函数内部的this也就是ctx了
  const result = ctx[fnName](...args);
  // 用完之后，将fnName从上下文ctx中删除
  delete ctx[fnName];

  return result;
}

// 测试
let fn = function (name, sex) {
  console.log(this, name, sex);
}

fn.myCall('', '张哲一');
// window 张哲一 boy
fn.myCall({ name: '张哲一', sex: 'boy' }, '张哲一');
// { name: '张哲一', sex: 'boy' } 张哲一 boy
