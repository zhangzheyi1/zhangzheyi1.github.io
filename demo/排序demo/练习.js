function quickSort(list) {
  const n = list.length;
  if (n <= 1) {
    return list;
  }
  let pivot = list.splice(n/2, 1)[0];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < n; i++) {
    if (list[i] < pivot) {
      leftArr.push(list[i]);
    } else {
      rightArr.push(list[i]);
    }
  }
  return quickSort(leftArr).concat([pivot], quickSort(rightArr));
}