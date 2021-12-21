/**
 * 节流函数 一个函数执行一次后，只有大于设定的执行周期才会执行第二次。
 * 有个需要频繁触发的函数，出于优化性能的角度，在规定时间内，只让函数触发的第一次生效，后面的不生效。
 * @param fn要被节流的函数
 * @param delay规定的时间
 */
function throttle(fn, delay) {
  //记录上一次函数触发的时间
  var lastTime = 0;
  return function () {
    //记录当前函数触发的时间
    var nowTime = Date.now();
    if (nowTime - lastTime > delay) {
      //修正this指向问题
      fn.call(this);
      //同步执行结束时间
      lastTime = nowTime;
    }
  }
}

document.onscroll = throttle(function () {
  console.log('scrollor事件被触发了' + Date.now());
}, 200);

/**
* 防抖函数  一个需要频繁触发的函数，在规定时间内，只让最后一次生效，前面的不生效
* @param fn要被防抖的函数
* @param delay规定的时间
*/
function debounce(fn, delay) {
  //记录上一次的延时器
  var timer = null;
  return function () {
    //清除上一次的演示器
    clearTimeout(timer);
    //重新设置新的延时器
    timer = setTimeout(function () {
      //修正this指向问题
      fn.apply(this);
    }, delay);
  }
}
document.getElementById('btn').onclick = debounce(function () {
  console.log('按钮被点击了' + Date.now());
}, 1000);
