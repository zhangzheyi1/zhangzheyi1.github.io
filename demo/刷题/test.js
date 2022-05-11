var str = "aagaabbbabtavnahaa";
function maxstringload(str) {
  var obj = {};
  for (var i = 0; i < str.length; i++) {
    var key = str[i];//key中存储的是每一个字符串
    if (obj[key]) {//判断这个键值对中有没有这个键
      obj[key]++;
    } else {
      obj[key] = 1;//obj[w]=1
    }
  }

  var maxCount = 0;//假设是出现次数最多的次数
  var maxString = "";//假设这个字符串是次数出现最多的字符串
  for (var key in obj) {
    if (maxCount < obj[key]) {
      maxCount = obj[key];//保存最大的次数
      maxString = key;
    }
  }
  return "出现次数最多的字母:" + maxString + "出现了" + maxCount + "次";
}
console.log(maxstringload(str))