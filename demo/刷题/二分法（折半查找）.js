function BinarySearch(arr, target) {
  if (arr.length <= 1) return -1;
  // 低位下标
  let lowIndex = 0;
  // 高位下标
  let highIndex = arr.length - 1;

  while (lowIndex <= highIndex) {
      // 中间下标
      const midIndex = Math.floor((lowIndex + highIndex) / 2);
      // 如果目标数字比中间数字小，高位下标-1
      if (target < arr[midIndex]) {
          highIndex = midIndex - 1;
      // 如果目标数字比中间数字大，低位下标+1
      } else if (target > arr[midIndex]) {
          lowIndex = midIndex + 1;
      } else {
          // target === arr[midIndex]
          return midIndex;
      }
  }
  return -1;
}
// 下面为测试用
const arr = [1, 4, 5, 6, 7, 8, 10, 11, 23, 42, 44, 54, 56, 77, 102]
console.log(BinarySearch(arr, 44))
console.log(BinarySearch(arr, 1))
console.log(BinarySearch(arr, 102))
console.log(BinarySearch(arr, 1111))
