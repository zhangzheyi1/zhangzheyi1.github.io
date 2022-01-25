// 1. 排序
var maximumProduct = function(nums) {
  nums.sort((a, b) => a - b);
  const n = nums.length;
  return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3]);
};

// 复杂度分析
// 时间复杂度：O(N\log N)O(NlogN)，其中 NN 为数组长度。排序需要 O(N\log N)O(NlogN) 的时间。
// 空间复杂度：O(\log N)O(logN)，主要为排序的空间开销。

// 2. 线性扫描
// 在方法一中，我们实际上只要求出数组中最大的三个数以及最小的两个数，因此我们可以不用排序，用线性扫描直接得出这五个数。

var maximumProduct = function(nums) {
  // 最小的和第二小的
  let min1 = Number.MAX_SAFE_INTEGER, min2 = Number.MAX_SAFE_INTEGER;
  // 最大的、第二大的和第三大的
  let max1 = -Number.MAX_SAFE_INTEGER, max2 = -Number.MAX_SAFE_INTEGER, max3 = -Number.MAX_SAFE_INTEGER;

  for (const x of nums) {
      if (x < min1) {
          min2 = min1;
          min1 = x;
      } else if (x < min2) {
          min2 = x;
      }

      if (x > max1) {
          max3 = max2;
          max2 = max1;
          max1 = x;
      } else if (x > max2) {
          max3 = max2;
          max2 = x;
      } else if (x > max3) {
          max3 = x;
      }
  }

  return Math.max(min1 * min2 * max1, max1 * max2 * max3);
};

// 复杂度分析
// 时间复杂度：O(N)O(N)，其中 NN 为数组长度。我们仅需遍历数组一次。
// 空间复杂度：O(1)O(1)。
