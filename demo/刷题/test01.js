// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  console.log(quickSort(left).concat([pivot], quickSort(right)));
  return quickSort(left).concat([pivot], quickSort(right));
}

const arr = [1, 4, 5, 87, 73, 32, 44, 25, 11, 11, 19];

quickSort(Array.from(new Set(arr)));