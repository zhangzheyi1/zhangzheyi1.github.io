
// 红灯 3s 亮一次

// 绿灯 1s 亮一次

// 黄灯 2s 亮一次

// 不断交替的亮



function red() {

  console.log('red');

}

function green() {

  console.log('green');

}

function yellow() {

  console.log('yellow');

}

function sleep(duration) {
  return new Promise(res => {
    setTimeout(res, duration);
  })
}

/**

 *

 * @param {Number} timer

 * @param {(红|黄|绿)} light

 */

const task = (timer, light) => {

  return new Promise(resolve => {
    if (light === 'red') {
      red();
    } else if (light === 'yellow') {
      yellow();
    } else if (light === 'green') {
      green();
    }
    sleep(timer).then(resolve);
  })
};



const run = () => {

  return new Promise(resolve => {
    task(3000, 'red').then(() => {
      task(2000, 'yellow').then(() => {
        task(1000, 'green').then(() => {
          run();
        })
      })
    })
  })


};
run();