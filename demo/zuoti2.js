// var compose = (f, g) => (x) => f(g(x));

var add1 = (x) => x + 1;

var mul5 = (x) => x * 5;

function compose(...fns) {
  return function (x) {
    return fns.reduceRight(function (arg, fn) {
      return fn(arg);
    }, x)
  }
}

console.log(compose(mul5, add1)(2)); // =>15

