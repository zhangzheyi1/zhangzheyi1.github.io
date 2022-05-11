const tree = {
  id: 'root',
  children: [
    {
      id: 'node-1',
      children: [
        {
          id: 'node-1-1',
          children: [
            {
              id: 'node-1-1-1'
            }
          ]
        },
        {
          id: 'node-1-2'
        }
      ],
    },
    {
      id: 'node-2',
      children: 'unexpected'
    },
    {
      id: 'node-3',
      children: [
        {
          id: 'node-3-1',
          children: [
            {
              id: 'node-3-1-1',
              children: [
                {
                  id: 'node-3-1-1-1'
                },
              ]
            },
            {
              id: 'node-3-1-2'
            }
          ]
        }
      ]
    }
  ]
};

// 请实现一个函数，接收树中任意节点的 id，返回此节点信息，提示用递归
function returnObj(id, obj) {
  // 做一个判断，如果取到的是最外层的root，直接返回obj
  if (obj.id !== undefined && obj.id === id) {
    return obj;
  }
  // 做一下unexpected的校验
  if (!obj.children || obj.children === 'unexpected') {
    return;
  }
  let result;
  const children = obj.children;
  for (let i = 0; i < children.length; i++) {
    let item = children[i];
    if (item.id === id) {
      return result;
    } else if (item.children && item.children.length > 0) {
      //如果有子集，则把子集作为参数重新执行本方法
      result = returnObj(id, obj);
      //关键，千万不要直接return本方法，不然即使没有返回值也会将返回return，导致最外层循环中断，直接返回undefined,要有返回值才return才对
      if (result) {
        return result;
      }
    }
  }
  console.log('result', result);
  return result;
}

returnObj('node-3-1-2', tree);