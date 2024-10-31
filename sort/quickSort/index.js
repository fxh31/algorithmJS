function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    const base = arr[start]; // 基准值
    let left = start,
      right = end;
    while (left < right) {
      while (left < right && base <= arr[right]) {
        right--;
      }
      arr[left] = arr[right];
      while (left < right && base >= arr[left]) {
        left++;
      }
      arr[right] = arr[left];
    }
    arr[left] = base;
    quickSort(arr, start, left - 1); // 分治
    quickSort(arr, left + 1, end); // 分治
  }
}