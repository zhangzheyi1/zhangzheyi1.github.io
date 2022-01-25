// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

/**
 * @param {string} s
 * @return {character}
 */
 var firstUniqChar = function(s) {
  // 1、哈希
  // let map = {}
  // for (let i  = 0; i< s.length; i++) {
  //     if (map[s[i]]) {
  //         map[s[i]]++
  //     } else {
  //         map[s[i]] = 1
  //     }
  // }
  // for (let i in map) {
  //     if(map[i] === 1) return i
  // }
  // return ' '

  // 2、indexOf和lastIndexOf
  for (let i = 0; i< s.length; i++) {
      if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) return s[i]
  }
  return ' '
};
