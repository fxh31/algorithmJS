import { swap } from "../../utils.js";

// 给定一个数组，使用冒泡排序的方式由小到大排列数组里的值
function bubbleSort(arr) {
  if (arr.length < 2 || arr === null) return;
  for (let end = arr.length - 1; end > 0; end--) { // 由于每次遍历都会确定一个最大值放在遍历数组的尾部，所以每轮遍历可以减去最后一个位置（0 ~ end）
    for (let i = 0; i < end; i++){ // 循环遍历数组，将最大值通过一个个的两两交换换到数组末尾
      if (arr[i] > arr[i + 1]) { // 两两相比，如果当前位置的值大于后一个位置的，则进行交换
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr;
}


// test
// console.log(swap([4,3,2,1,8,9,1,0], 1,3))
console.log(bubbleSort([4,3,2,1,8,9,1,0]))