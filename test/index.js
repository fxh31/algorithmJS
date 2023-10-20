// 方法 a（需要进行测试的方法）
function yourtestFunction(arr) {
  console.log('我是需要进行测试的方法')
}

// 方法 b（此处以js内置的排序函数为准）
function comparator(arr) {
  arr.sort()
}

// 随机数组生成器
function generateRandomArray(maxSize, maxValue) {
  const arr = new Array((maxSize + 1) * Math.random()); // 生成一个长度随机的数组
  for (let i = 0; i < arr.length; i++) {
    arr[i] = (maxValue + 1) * Math.random() - (maxValue * Math.random())
  }
  return arr;
}

function main() {
  const testTime = 500000; // 测试次数
  const maxSize = 100; // 测试长度范围
  const maxValue = 100; // 测试值范围
  let succeed = true;

  for (let i = 0; i < testTime; i++){
    const arr1 = generateRandomArray(maxSize, maxValue);
    const arr2 = [...arr1]; // 复制一份arr1

    yourtestFunction(arr1)
    comparator(arr2)

    if (JSON.stringify(arr1) !== JSON.stringify(arr2)) { // 判断两个数组是否相等
      succeed = false;
      break;
    }
  }
  console.log(succeed?'success': 'fail')
}
