var maximumProduct = function(nums) {
  const v = nums.sort((a, b) => a - b);
  console.log('v', v);
  // const n = nums.length;
  // return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3]);
};

maximumProduct([1, -2, 45])