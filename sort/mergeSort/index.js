function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = arr.length >> 1;
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  let l = 0,
    r = 0;
  while (l < left.length && r < right.length) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  result.push(...left.slice(l), ...right.slice(r));
  return result;
}