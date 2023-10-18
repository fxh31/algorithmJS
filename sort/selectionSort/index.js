// 给定一个数组，使用选择排序的方式由小到大排列数组里的值
function selectionSort(arr) {
  if (arr.length < 2 || arr === null) return;
  for (let i = 0; i < arr.length - 1; i++) { // 将数组中的所有值都遍历一遍
    let minIndex = i; // 取当前数组的第一个值作为最小值进行比较
    for (let j = i + 1; j < arr.length - 1; j++) { // 由于选择排序每次都会确定一个值的位置（当前值里的最小值），所以下一个需要比较的值只需要从 i+1 ~ length-1 即可
      if (arr[j] < arr[minIndex]) { // 更新剩下的值里的最小值
        minIndex = j;
      }
      if (minIndex !== i) { // 将最小值的位置与当前位置交换
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
  }
  return arr;
}

// 结合ES6解构赋值简写
function selectionSort2(arr) {
  if (arr.length < 2 || arr === null) return;
  for (let i = 0; i < arr.length - 1; i++) { 
    let minIndex = i; 
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] < arr[minIndex]) { 
        minIndex = j;
      }

      if (minIndex !== i) 
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]] // 交换位置
    }
  }
  return arr;
}

// test
console.log(selectionSort2([4,6,2,4,8,9,1,0]))