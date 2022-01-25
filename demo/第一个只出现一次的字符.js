// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

// 示例 1:

// 输入：s = "abaccdeff"
// 输出：'b'
// 示例 2:

// 输入：s = "" 
// 输出：' '

// 方法一：使用哈希表存储频数
// 思路与算法:

// 我们可以对字符串进行两次遍历。

// 在第一次遍历时，我们使用哈希映射统计出字符串中每个字符出现的次数。在第二次遍历时，我们只要遍历到了一个只出现一次的字符，那么就返回该字符，否则在遍历结束后返回空格。

/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
  const frequency = _.countBy(s);
  for (const [i, ch] of Array.from(s).entries()) {
    if (frequency[ch] === 1) {
      return ch;
    }
  }
  return ' ';
};

// 方法二：使用哈希表存储索引
// 思路与算法

// 我们可以对方法一进行修改，使得第二次遍历的对象从字符串变为哈希映射。

// 具体地，对于哈希映射中的每一个键值对，键表示一个字符，值表示它的首次出现的索引（如果该字符只出现一次）或者 -1−1（如果该字符出现多次）。当我们第一次遍历字符串时，设当前遍历到的字符为 cc，如果 cc 不在哈希映射中，我们就将 cc 与它的索引作为一个键值对加入哈希映射中，否则我们将 cc 在哈希映射中对应的值修改为 -1−1。

// 在第一次遍历结束后，我们只需要再遍历一次哈希映射中的所有值，找出其中不为 -1−1 的最小值，即为第一个不重复字符的索引，然后返回该索引对应的字符。如果哈希映射中的所有值均为 -1−1，我们就返回空格。


var firstUniqChar = function(s) {
  const position = new Map();
  const n = s.length;
  for (let [i, ch] of Array.from(s).entries()) {
      if (position.has(ch)) {
          position.set(ch, -1);
      } else {
          position.set(ch, i);
      }
  }
  let first = n;
  for (let pos of position.values()) {
      if (pos !== -1 && pos < first) {
          first = pos;
      }
  }
  return first == n ? ' ' : s[first];
};


