var quickSort = function (arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  // 取到中间值
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];

  for (var i = 0; i < arr.length; i++) {
    // 遍历数组，如果比中间值小，push到left数组
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 一直遍历到left数组的长度为1
  return quickSort(left).concat([pivot], quickSort(right));
};

const list = [3, 5, 2, 6, 1, 0];
console.log('quickSort', quickSort(list));