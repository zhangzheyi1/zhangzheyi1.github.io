function bubbleSort(list) {
  var n = list.length;
  if (n === 0) {
    return [];
  }
  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - i - 1; j++) {
      if (list[j] > list[j + 1]) {
        var temp = list[j + 1];
        list[j + 1] = list[j];
        list[j] = temp;
      }
    }
  }
  console.log(list);
  return list;
}

const list = [3, 5, 2, 6, 1, 0];
bubbleSort(list);