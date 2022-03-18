// leecode 112,路径之和

// 思路
// 1. sum ： 从根节点到叶子节点的路径上的节点值相加的目标和
// 2. 对 root 递归。转为判断：root 的左、右子树中能否找出和为 sum-root.val 的路径
// 3. 就变成一个规模小一点的相同问题
// 4. 即，每遍历一个节点，sum 就减去当前节点值，当遍历到叶子节点时，因为没有子节点了，如果 sum - 当前叶子节点值 == 0 ，即找到了从根节点到叶子节点的和为 sum 的路径
// 5. 时间复杂度：O(n)，每个节点被遍历一次

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}

const hasPathSum = (root, sum) => {
  if (root == null) { // 遍历到null节点
    return false;
  }
  if (root.left == null && root.right == null) { // 遍历到叶子节点
    return sum - root.val == 0;                  // 如果满足这个就返回true。否则返回false
  }
  // 不是上面的情况，则拆成两个子树的问题，其中一个true了就行
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val); 
}

