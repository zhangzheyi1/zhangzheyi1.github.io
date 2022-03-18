const maxDepth = function(root) {
  if (!root) {
    return 0;
  }
  let maxChildDepth = 0;
  const children = root.children;
  for (const child of children) {
      const childDepth = maxDepth(child);
      maxChildDepth = Math.max(maxChildDepth, childDepth);
  }
  return maxChildDepth + 1;
}