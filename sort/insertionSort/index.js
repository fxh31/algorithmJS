import { swap } from "../../utils.js";

// 给定一个数组，使用插入排序的方式由小到大排列数组里的值
function insertionSort(arr) {
  if (arr.length < 2 || arr === null) return;
  for (let i = 1; i < arr.length; i++) { // 做到 0 ~ i 是有序的（0 ~ 0 必然是有序的，所以从 1 开始）
    // 将当前位置的值和前一位比较，如果当前位置数值大，则继续向前一位比较，一直数组越界前为止；如果找了比当前位置的数值大的值，则与之交换位置，然后进行下一次数组遍历
    for (let j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) { 
      swap(arr, j, j + 1)
    }
  }
  return arr;
}

// test
console.log('插入排序',insertionSort([4,3,2,1,8,9,1,0]))