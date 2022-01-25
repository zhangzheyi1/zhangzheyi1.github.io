// var quickSort = function (arr) {
//   if (arr.length <= 1) {
//     return arr;
//   }
//   var pivotIndex = Math.floor(arr.length / 2);
//   // 取到中间值
//   var pivot = arr.splice(pivotIndex, 1)[0];
//   var left = [];
//   var right = [];

//   for (var i = 0; i < arr.length; i++) {
//     // 遍历数组，如果比中间值小，push到left数组
//     if (arr[i] < pivot) {
//       left.push(arr[i]);
//     } else {
//       right.push(arr[i]);
//     }
//   }
//   // 一直遍历到left数组的长度为1
//   return quickSort(left).concat([pivot], quickSort(right));
// };

// const list = [3, 5, 2, 6, 1, 0];
// console.log('quickSort', quickSort(list));

// const quickSort = function(arr) {
//   var pivotIndex = Math.floor(arr.length / 2);
//   var pivot = arr.splice(pivotIndex, 1)[0]
// }

/**
 * 主函数
 * @param {Function} CallDef1 是否调用自定义函数1
 * @param {Function} CallDef2 是否调用自定义函数1
 * @param {Function} CallDef3 是否调用自定义函数1
 */
function mainFunction(CallDef1 = false, CallDef2 = false, CallDef3 = false,) {
  if(CallDef1) {
    def1(args);
  };
  if(CallDef2) {
    def1(args);
  };
  if(CallDef3) {
    def1(args);
  };
}

function def1(args) {
  return args;
}
function def2(args) {
  return args;
}
function def3(args) {
  return args;
}
// 代表调用自定义函数12，不调用自定义函数3
mainFunction(true, true, false);